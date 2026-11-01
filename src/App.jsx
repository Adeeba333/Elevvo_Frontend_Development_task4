import { useState, useMemo, useEffect } from "react";
import { posts, categories, POSTS_PER_PAGE } from "./data/data.js";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import SearchBar from "./components/SearchBar.jsx";
import PostGrid from "./components/PostGrid.jsx";
import Pagination from "./components/Pagination.jsx";

function App() {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const [theme, setTheme] = useState(
        () =>
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    const filtered = useMemo(
        () =>
        posts.filter(
            (p) =>
            (category === "All" || p.category === category) &&
            p.title.toLowerCase().includes(search.toLowerCase().trim())
        ),
        [category, search]
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
    const start = (page - 1) * POSTS_PER_PAGE;
    const visible = filtered.slice(start, start + POSTS_PER_PAGE);

    const handleCategory = (c) => { setCategory(c); setPage(1); };
    const handleSearch = (s) => { setSearch(s); setPage(1); };
    const handlePage = (n) => {
        setPage(n);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
            <div className="controls">
            <CategoryFilter
                categories={categories}
                selected={category}
                onSelect={handleCategory}
            />
            <SearchBar value={search} onChange={handleSearch} />
            </div>
            <PostGrid posts={visible} />
            <Pagination page={page} totalPages={totalPages} onChange={handlePage} />
        </main>
        <footer>&copy; 2026 DearDiary</footer>
        </>
    );
    }

export default App;