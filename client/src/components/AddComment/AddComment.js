import React, { useState } from 'react';
import './AddComment.scss';
import axios from "axios";

const AddComment = ({post_Id}) => {

    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
   
    const handleComment = async (e) => {
        e.preventDefault();
        const newComment = {
                userName,
                comment,
                postId: post_Id,
        }
        try{
             await axios.post("/api/comments", newComment);
             window.location.reload();
            
        } catch(err){
                console.log(err)
        }
    };

    return (
        <div className="comment">
            <h3>LEAVE A COMMENT</h3>
            <input 
                className="comment__name" 
                type="text" 
                onChange={e => setUserName(e.target.value)}  
                placeholder="NAME"
            />
            <textarea  
                className="comment__text"rows="4" 
                cols="50" 
                onChange={e => setComment(e.target.value)} 
                placeholder="COMMENT..." />
            <button 
                className="comment__btn" 
                type="submit"
                onClick={handleComment}>LEAVE COMMENT</button>
        </div>
    );
}

export default AddComment;