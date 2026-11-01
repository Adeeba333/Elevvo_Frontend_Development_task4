import CategoryIcon from "./CategoryIcon.jsx";
import { colors } from "../data/data.js";
import { formatDate } from "../utils/helpers.js";

function PostCard({ title, category, description, date }) {
    const [c1, c2, fg] = colors[category];

    return (
        <article className="card">
        <div
            className="thumb"
            style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
        >
            <CategoryIcon category={category} color={fg} />
        </div>
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