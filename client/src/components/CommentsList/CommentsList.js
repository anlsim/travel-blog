import React from 'react'
import './CommentsList.scss'
import Comment from '../Comment/Comment'
import ReplyComment from '../ReplyComment/ReplyComment'

const CommentsList = ({ comments }) => (
  <>
    <div className='commentList'>
      <h3>COMMENTS</h3>

      {comments.map((c, key) => (
        <>
          <Comment comment={c} />
          <ReplyComment />
        </>
      ))}
    </div>
  </>
)
export default CommentsList
