import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
const CreateAccount = ()=>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [cpassword , setcPassword] = useState("");
    const [error ,setError] = useState("");

    const navigate = useNavigate();
    const createAccount = async ()=>{
        try{
            if(password !== cpassword){
                setError("Passwords don't match");
                return ;
            }
            await createUserWithEmailAndPassword(getAuth() , email , password);
            navigate('/articles')
        }catch(error){
            setError(error.message);
        }
        

    }

    return (
        <>
        {error && <p className="error">{error}</p>}
        <div id= "page-body">
        <h1>Login</h1>
        <label>
        Email :
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}>

        </input>
        </label>
        <label>
        Password :
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}>

        </input>
        </label>
        <label>
        Confirm Password :
        <input type="password" value={cpassword} onChange={(e)=>setcPassword(e.target.value)}>

        </input>
        </label>

        <button onClick={createAccount}>Create Account</button>
        <Link to={"/login"}><p>Already have an Account ? Login here!</p></Link>
        </div>
        
        
        </>
        
    )
}

export default CreateAccount;