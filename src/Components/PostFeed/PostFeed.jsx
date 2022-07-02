
import likeImage from "./thumbsUp.png";
import dislikeImage from "./thumbsDown.png";

const PostFeed = ({posts}) => {
    
  
    return (  
        <div id='container'>
            {posts.map((post,index) => {
               if (post.id >0) {
                return (
                    <div key={post.id} className = 'postContainer'> 
                        <p id='name'>{post.name}</p>
                        <p id='post'>{post.post}</p>
                        <p id='date'>{post.date}</p>
                        <button type='button' name='like' id='like'><img src={likeImage}/></button>
                        <button type='button' name='dislike' id='dislike'><img src={dislikeImage}/></button>
                    </div>
                );}
            })}
        </div>

        
    );
}
 
export default PostFeed;