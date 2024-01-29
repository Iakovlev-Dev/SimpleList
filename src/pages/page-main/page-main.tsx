import PostCard from "../../components/Post-card/PostCard";
import { selectPosts } from "../../store/data-process/selectors";
import { useAppSelector } from "../../store/hooks";


export default function PageMain () {
    const posts = useAppSelector(selectPosts);
    
    
    return (
        <>
            <h1>Самый простой список постов</h1>
            <div className="list-posts">
                <ul>
                {posts?.map((item) => 
                    <li key={item.id}>
                        <PostCard post={item} />
                    </li>
                )}
                </ul>
            </div>

        </>
    )
}