import { Link, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import PostCard from "../../components/Post-card/PostCard";
import { useFetchPostByIdQuery } from "../../store-query/post-api";

export default function PagePost () {
    const {id} = useParams()
    const {data} = useFetchPostByIdQuery(Number(id))

    return (data &&
        <>
            <h1>Тут будет пост</h1>
            <PostCard post={data} currentPost={true}/>
            <Link to={AppRoute.Main}>Вернуться на главную</Link>
        </>
    )
}