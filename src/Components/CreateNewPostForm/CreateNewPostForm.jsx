import React, { useState } from 'react';

const CreateNewPostForm = ({addNewPost}) => {
    const [name, setName] = useState(' ');
    const [post, setPost] = useState(' ');
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            date: Date()            
        };
            
        addNewPost(newPost);

        
        return
    }
        
    return (
       <div className='shadow bg-white rounded justify-content-center m-3 p-1 b-2'>
            <form onSubmit={handleSubmit}>
               <div className = 'form-group row'>
                     <label htmlFor = "name" className = 'col-sm-1 col-form-label'>Name</label>
                     <div className = 'col-sm-8'>     
                         <input type = 'text' className = 'form-control p-1' id = "name" name = "name" value={name} onChange = {(event)=> setName(event.target.value)}/>
                     </div>
                </div>
                <div className = 'form-group row'>
                     <label htmlFor = "post" className = 'col-sm-1 col-form-label'>Post</label>
                     <div className = 'col-sm-8'>
                         <input type = 'text' className = 'form-control form-control-lg' id='post' name='post' value = {post} onChange = {(event)=> setPost(event.target.value)}/>
                     </div>
                     <div className = 'col-1'>
                        <button type='submit' className = "btn btn-primary">Create</button>
                    </div>
                </div>
                
                

            </form> 
        </div>





    )
    
    
    
    ;
}
 
export default CreateNewPostForm;