import { Link, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import { useAppSelector } from "../../store/hooks";
import { selectPosts } from "../../store/data-process/selectors";
import PostCard from "../../components/Post-card/PostCard";

export default function PagePost () {
    const posts = useAppSelector(selectPosts);
    const {id} = useParams()
    const currentPost = posts?.find((post) => post.id === Number(id))

    return (currentPost &&
        <>
            <h1>Тут будет пост</h1>
            <PostCard post={currentPost} currentPost={true}/>
            <Link to={AppRoute.Main}>Вернуться на главную</Link>
        </>
    )
}