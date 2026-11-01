import { makeImage, formatDate } from "../utils/helpers.js";

function PostCard({ title, category, description, date }) {
    return (
        <article className="card">
        <img src={makeImage(category)} alt={title} />
        <div className="body">
            <span className="tag">{category}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <time dateTime={date}>{formatDate(date)}</time>
        </div>
        </article>
    );
}

export default PostCard;