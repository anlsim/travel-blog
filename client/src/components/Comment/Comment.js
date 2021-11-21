import { useState } from 'react'
import AddComment from '../AddComment/AddComment'

function Comment({comment}) {
  const [OpenReply, setOpenReply] = useState(false)

  const openReply = () => {
      setOpenReply(!OpenReply)
  }
  return (
    <div className="commentDiv">
                <h4>{comment.userName}</h4>
                <p className="commentDiv__date">{new Date(comment.createdAt).toLocaleString()}</p>
                <p className="commentDiv__text">{comment.comment}</p>
                <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
                {OpenReply && 
                    <AddComment post_Id={comment.postId} commentId={comment._id}/>
                }
    </div>
  )
}

export default Comment
