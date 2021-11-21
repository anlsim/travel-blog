import React from 'react'

function Comment({comment}) {
  return (
    <div className="commentDiv">
                <h4>{comment.userName}</h4>
                <p className="commentDiv__date">{new Date(comment.createdAt).toLocaleString()}</p>
                <p className="commentDiv__text">{comment.comment}</p>
    </div>
  )
}

export default Comment
