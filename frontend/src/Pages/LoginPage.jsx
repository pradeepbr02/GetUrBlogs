import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
const LoginPage = ()=>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error ,setError] = useState("");

    const navigate = useNavigate();
    const login = async ()=>{
        try{
            await signInWithEmailAndPassword(getAuth() , email , password);
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

        <button onClick={login}>Login</button>
        <Link to={"/createaccount"}><p>Still don't have an account ? create one!</p></Link>
        </div>
        
        
        </>
        
    )
}

export default LoginPage;