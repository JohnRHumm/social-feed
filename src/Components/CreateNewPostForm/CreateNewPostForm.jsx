import React, { useState } from 'react';

const CreateNewPostForm = ({addNewPost}) => {
    const [name, setName] = useState(' ');
    const [post, setPost] = useState(' ');
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            date: Date(),
            like: false,
            dislike: false
        };
            
            addNewPost(newPost);

        
        return
     }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div id='name_field'>
                <label>Name 
                    <input type = 'text' id='name' name='name' value={name} onChange = {(event)=> setName(event.target.value)}/>
                </label>
             </div>
             <div id='post_field'>
                <label> Post 
                    <input type = 'text' id='post' name='post' value = {post} onChange = {(event)=> setPost(event.target.value)}/>
                </label>
                <button type='submit'>Create</button>
             </div>
            

        </form> 





    )
    
    
    
    ;
}
 
export default CreateNewPostForm;