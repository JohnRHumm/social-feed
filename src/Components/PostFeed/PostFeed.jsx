
const PostFeed = ({posts}) => {
    
  
    return (  
        <div id='container'>
            {posts.map((post,index) => {
               if (post.id >0) {
                return (
                    <div key={post.id}> 
                        <p id='name'>{post.name}</p>
                        <p id='post'>{post.post}</p>
                        <p id='date'>{post.date}</p>
                        <p id='like'>Like: {post.like}</p>
                        <p id='dislike'>Dislike: {post.dislike}</p>
                    </div>
                );}
            })}
        </div>

        
    );
}
 
export default PostFeed;