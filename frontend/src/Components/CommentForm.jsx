import axios from "axios"
import { useState } from "react"
import useUser from "../hooks/useUser";
const CommentForm = ({articleid , onArticleUpdated})=>{
   
    const [comment , setComment] = useState("");
    const {user} = useUser();
    
    const handleComment = async ()=>{
        const token = user && await user.getIdToken();
    const headers = token ? {authToken : token} : {};
        const response = await axios.post(`/api/articles/${articleid}/comment` ,{
            postedBy : user.email,
            comment : comment
        } , 
        {
            headers
        }
          )
     
          setComment("");

        onArticleUpdated(response.data)
    }
    return (
        <>
        <div id="add-comment-form">
        <h3>Add Comment</h3>
        <p>You are commenting as {user ? user.email : 'Guest'} </p>

        <label>
            Comment : 
            <textarea rows={5} cols={40} value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
        </label>
        <button  onClick={handleComment} >Add comment</button>
        </div>
      
        </>
    )
}
export default CommentForm