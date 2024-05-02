import { Link , useNavigate } from "react-router-dom"
import '../App.css';
import { getAuth , signOut } from "firebase/auth";
import useUser from "../hooks/useUser";


const NavBar = ()=>{
  const {user} = useUser();
  const navigate = useNavigate();
    return (
        <nav>
        <ul>
         
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Blogs</Link>
          </li>
          <div className="nav-right">
           
             {user ? <button onClick={()=>{signOut(getAuth())}}>Logout</button>: <button onClick={()=>navigate('/login')}>Login</button>}
          </div>
        </ul>
      </nav>
    )
}
export default NavBar;