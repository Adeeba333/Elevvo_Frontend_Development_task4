import PostCard from "./PostCard.jsx";

function PostGrid({ posts }) {
    return (
        <section className="grid">
        {posts.length === 0 ? (
            <p className="empty">No posts found. Try another category or keyword.</p>
        ) : (
            posts.map((p) => <PostCard key={p.id} {...p} />)
        )}
        </section>
    );
}

export default PostGrid;