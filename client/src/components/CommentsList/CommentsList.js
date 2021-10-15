import React from 'react';
import './CommentsList.scss'

const CommentsList = ({ comments }) => (
    <>
    <div className="commentList">
        <h3>COMMENTS</h3>

        {comments.map((c, key) => (
            <div className="commentDiv" key={key}>
                <h4>{c.userName}</h4>
                <p className="commentDiv__date">{new Date(c.createdAt).toLocaleString()}</p>
                <p className="commentDiv__text">{c.comment}</p>
            </div>
        ))}
     </div>
    </>
);
export default CommentsList;