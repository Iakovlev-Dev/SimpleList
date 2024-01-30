import PostCard from "../../components/Post-card/PostCard";
import { postApi } from "../../store-query/post-api";

export default function PageMain () {
    
    const { data = [], isLoading } = postApi.useFetchPostsQuery(undefined);
 
    if(isLoading) return <h1>Loading...</h1>

    return (
        <>
            <h1>Самый простой список постов</h1>
            <div className="list-posts">
            <ul>
                  {data.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                  ))}

              </ul> 
            </div>

        </>
    )
}
