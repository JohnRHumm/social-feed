import React from "react";
import likeImage from "../../Assets/thumbsUp.png";
import dislikeImage from "../../Assets/thumbsDown.png";
import StatusButtons from "../StatusButtons/StatusButtons";

const PostFeed = ({posts}) => {
    
     return (  
        <div className='shadow bg-white rounded justify-content-center m-3 p-1 border border-dark'> 
            {posts.map((post,index) => {
               if (post.id >0) {
                return (
                    <div key={post.id} className = 'border-bottom'> 
                        <div className = 'form-group row'>
                            <p className = 'fw-light m-0'>{post.date}</p>
                        </div>
                        <div className = 'form-group row'>
                            <p className = 'fw-bold m-0'>{post.name}</p>
                        </div>
                        <div className = 'form-group row text-wrap text-break'>
                            <p className='m-0'>{post.post}</p>
                        </div>
                        <div className = 'form-group row text-end p-1'>
                         <StatusButtons likeImage = {likeImage} dislikeImage = {dislikeImage}/>
                        </div>
                        
                    </div>
                );}
            })}
        </div>

        
    );
}
 
export default PostFeed;