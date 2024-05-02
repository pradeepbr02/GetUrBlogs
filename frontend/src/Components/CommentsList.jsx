
const CommentsList = ({comments})=>{
    return(
    <>
    <h3 className="comment">Comments :</h3>
  {comments.map(comment=>{
    return(
    <div className="comment" key={comment.postedBy + ': ' + comment.comment}>
        <h3>Posted By : {comment.postedBy}</h3>
        <p>Comment : {comment.comment}</p>
    </div>
  )
  })}
    </>
)}
export default CommentsList