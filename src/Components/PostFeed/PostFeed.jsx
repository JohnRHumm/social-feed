import React from "react";
import likeImage from "../../Assets/thumbsUp.png";
import dislikeImage from "../../Assets/thumbsDown.png";
import StatusButtons from "../StatusButtons/StatusButtons";

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
                        <StatusButtons likeImage = {likeImage} dislikeImage = {dislikeImage}/>
                        
                    </div>
                );}
            })}
        </div>

        
    );
}
 
export default PostFeed;