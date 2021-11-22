import { useState } from 'react'
import AddComment from '../AddComment/AddComment'
import './Comment.scss'

function Comment({comment}) {
  const [OpenReply, setOpenReply] = useState(false)

  const openReply = () => {
      setOpenReply(!OpenReply)
  }
  return (
    <>
      <div className="commentDiv__userInfo">
        <p className="commentDiv__userName">{comment.userName}</p>
        <p className="commentDiv__date">- {new Date(comment.createdAt).toLocaleString(navigator.language, {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute:'2-digit'})}</p>
      </div>
      <p className="commentDiv__text">{comment.comment}</p>
      <span className="commentDiv__reply" onClick={openReply} key="reply">REPLY</span>
      { OpenReply && 
        <AddComment post_Id={comment.postId} commentId={comment._id}/>
      }
    </>
  )
}

export default Comment
