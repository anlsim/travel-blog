import { useEffect, useState } from 'react'
import './ReplyComment.scss'
import Comment from '../Comment/Comment'

function ReplyComment({comments, postId, parentCommentId}) {
  const [OpenReplyComments, setOpenReplyComments] = useState(false)
  const [ChildCommentNumber, setChildCommentNumber] = useState(0)
  console.log(OpenReplyComments)
  useEffect(() => {
    let commentNumber = 0
    comments.map((comment) => {
      if (comment.responseTo === parentCommentId) {
        commentNumber++
      }
    })
    setChildCommentNumber(commentNumber)
  }, [comments, parentCommentId])

  const handleChange = () => {
    setOpenReplyComments(!OpenReplyComments)
  }

  return (
    <div>
      {ChildCommentNumber > 0 && (
        <p
          style={{
            fontSize: '14px',
            margin: 0,
            color: 'gray',
          }}
          onClick={handleChange}>
          View {ChildCommentNumber} more comment(s)
        </p>
      )}
      {
      OpenReplyComments &&
      comments.map((c, key) => (
        <>
          {c.responseTo === parentCommentId && (
            <div className='something'>
              <Comment comment={c} />
              <ReplyComment
                comments={comments}
                postId={postId}
                parentCommentId={c._id}
                key={key}
              />
            </div>
          )}
        </>
      ))
      }
    </div>
  )
}

export default ReplyComment
