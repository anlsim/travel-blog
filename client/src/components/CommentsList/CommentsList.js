import React from 'react'
import './CommentsList.scss'
import Comment from '../Comment/Comment'
import ReplyComment from '../ReplyComment/ReplyComment'

const CommentsList = ({ comments }) => (
  <>
    <div className='commentList'>
      <h3>COMMENTS</h3>

      {comments.map((c, key) => (
        (!c.responseTo && 
        <>
          <Comment comment={c} key={key}/>
          <ReplyComment comments = {comments} postId = {comments.postId} parentCommentId = {c._id} key={key}/>
        </>
        )
      ))}
    </div>
  </>
)
export default CommentsList
