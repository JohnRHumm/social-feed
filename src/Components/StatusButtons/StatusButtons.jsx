import React, { useState } from "react";
import './StatusButtons.css';


const StatusButton = ({likeImage,dislikeImage}) => {
    const [likeButtonClass, setLikeButtonClass] = useState('inactive');
    const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive');

    function likeClick(){
        if (likeButtonClass === 'inactive'){
            setLikeButtonClass('active');
            setDislikeButtonClass('inactive');

        }
        else {
            setLikeButtonClass('inactive');
        }

    }

    function dislikeClick(){
        if (dislikeButtonClass === 'inactive'){
            setDislikeButtonClass('active');
            setLikeButtonClass('inactive');

        }
        else {
            setDislikeButtonClass('inactive');
        }

    }
    
    
    return ( 
        <div class = 'buttonContainer'>
            <button 
                type='button' name = 'likeButton' class = {likeButtonClass} onClick = {likeClick}
                ><img src={likeImage}/> 
            </button>
            <button
                type='button' name = 'dislikeButton' class = {dislikeButtonClass}  onClick = {dislikeClick}>
                <img src={dislikeImage}/> 
             </button>
        </div>
        
     );
}
 
export default StatusButton;