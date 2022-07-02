import React, { useState } from 'react';
import CreateNewPostForm from './Components/CreateNewPostForm/CreateNewPostForm';
import PostFeed from './Components/PostFeed/PostFeed';

function App() {

  const [postData,setPostData] = useState([{id: 0, name:' ',post:' ',date: Date(),like: false,dislike: false}]);
  
  function AddNewPost(post){
    let postLength = Object.keys(postData).length;
    post.id = postLength;
    let tempPost = [post,...postData];
    setPostData(tempPost);
  }
 
  return (
    
    <div id='container'>
      <nav>
        <div id='socialFeed'>SocialFeed</div>
      </nav>
      <div id='createNewPostForm'> <CreateNewPostForm addNewPost = {AddNewPost}/> </div> 
       
      <div id='PostFeed'> <PostFeed posts = {postData}/> </div> 
    </div>
  );
}

export default App;
