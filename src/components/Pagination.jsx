function Pagination({ page, totalPages, onChange }) {
    if (totalPages <= 1) return null;

    const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="pagination">
        <button disabled={page === 1} onClick={() => onChange(page - 1)}>
            Prev
        </button>
        {numbers.map((n) => (
            <button
            key={n}
            className={n === page ? "active" : ""}
            onClick={() => onChange(n)}
            >
            {n}
            </button>
        ))}
        <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
            Next
        </button>
        </nav>
    );
}

export default Pagination;