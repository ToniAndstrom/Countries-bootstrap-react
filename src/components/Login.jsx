import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginWithEmailAndPassword, auth } from "../auth/firebase";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";


export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogin=()=>{
      LoginWithEmailAndPassword(email,password).then(() =>
      navigate("/countries")
      )
    }
  return (
    <>
    <div>{user?.email}</div>
    <div>

<input type="text"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Email" />

    <input type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password" />   

<Button onClick={handleLogin}>Login</Button> <br />
Incase you don't have an account <br />
<Button onClick={()=>navigate("/register")}>Register here</Button>
</div>
</>
  )
    }

