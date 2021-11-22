import React, { useState, useContext } from 'react'
import axios from "axios"
import { Context } from "../../context/Contex"
import './AddComment.scss'

const AddComment = ({post_Id, commentId}) => {
    const { user } = useContext(Context)
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
   
    const handleComment = async (e) => {
        e.preventDefault();
        const newComment = {
                userName: user.firstName + user.lastName,
                comment,
                postId: post_Id,
                responseTo: commentId,
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
            <h3>{user.firstName.toUpperCase()} ADD A COMMENT</h3>
            <textarea  
                className="comment__text"rows="4" 
                cols="50" 
                onChange={e => setComment(e.target.value)} 
                placeholder="COMMENT..." />
            <button 
                className="comment__btn" 
                type="submit"
                onClick={handleComment}>ADD COMMENT</button>
        </div>
    );
}

export default AddComment;