function Header({ theme, onToggleTheme }) {
    return (
        <header>
        <button className="theme-toggle" onClick={onToggleTheme}>
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
        <h1>
            <img src="/deardiary_logo.png" alt="DearDiary blog" />
        </h1>
        <p>Stories on tech, books, food, movies and travel</p>
        </header>
    );
}

export default Header;