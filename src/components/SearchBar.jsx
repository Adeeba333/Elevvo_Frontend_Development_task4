function SearchBar({ value, onChange }) {
    return (
        <input
        type="search"
        id="search"
        placeholder="Search by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;