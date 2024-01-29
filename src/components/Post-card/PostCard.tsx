import { Link } from "react-router-dom";
import { TPost } from "../../types/type-post";

type TPostCard = {
    post: TPost;
    currentPost?: boolean
}

export default function PostCard ({post, currentPost}: TPostCard) {
    const pathPost = `/post/${post.id}`
    const MAX_LENGTH = 150
    return (
        <div className="post">
            <p className="number">{post.id}</p>
            <p className="title">{post.title}</p>
            <div className="descriptioin">
                {currentPost ? <p className="desc">{post.body}</p> : <p className="desc">{post.body.length > MAX_LENGTH ? (post.body.slice(0, MAX_LENGTH) + ' ...') : post.body}</p>}
                {post.body.length > MAX_LENGTH && !currentPost &&
                <button>
                    <Link to={pathPost}>Просмотр</Link>
                </button>}
            </div>
        </div>
    )
}