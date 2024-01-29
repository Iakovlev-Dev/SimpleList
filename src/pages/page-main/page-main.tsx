import PostCard from "../../components/Post-card/PostCard";
import { useFetchPostsQuery } from "../../store-query/post-api";


export default function PageMain () {
    // const posts = useAppSelector(selectPosts);
    
    const {data = [], isLoading} = useFetchPostsQuery()

    if(isLoading) return <h1>Loading...</h1>

    return (
        <>
            <h1>Самый простой список постов</h1>
            <div className="list-posts">
                <ul>
                {data?.map((item) => 
                    <li key={item.id}>
                        <PostCard post={item} />
                    </li>
                )}
                </ul>
            </div>

        </>
    )
}