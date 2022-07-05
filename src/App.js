import React, { useState } from 'react';
import CreateNewPostForm from './Components/CreateNewPostForm/CreateNewPostForm';
import PostFeed from './Components/PostFeed/PostFeed';

function App() {

  const [postData,setPostData] = useState([{id: 0, name:' ',post:' ',date: Date()}]);
  
  function AddNewPost(post){
    let postLength = Object.keys(postData).length;
    post.id = postLength;
    let tempPost = [post,...postData];
    setPostData(tempPost);
  }
 
  return (
  <div className ='container-fluid'>
     <nav className ="navbar bg-white display-4">
        <div><strong>Social</strong>Feed</div>
    </nav>
    <div className = 'border rounded-3 bg-light'>
      <div id='createNewPostForm'> <CreateNewPostForm addNewPost = {AddNewPost}/> </div> 
    </div>
     <div id='PostFeed'> <PostFeed posts = {postData}/> </div> 
       
  </div> 
  );
}

export default App;
