import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../styles.css'
export const Login = (props) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [person,setPerson]=useState('');
    useEffect(()=>{
        setPerson(props.person)
    });
    return (
        <div className="container logincont background">
            <div className="row ">
                <h2 className="alignment"><strong>Login to Your Account</strong></h2>
            </div>
            <div className="row">
                <h6 className="alignment"><small>Login using social network</small></h6>
                <br />
            </div>
            <div className="row">
                <div className="alignment">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr" >
                        <img className="licon" src={require("../images/facebook(2).png")} alt="" />
                    </a>
                    <a href="https://www.google.com/intl/en-GB/gmail/about/">
                        <img className="licon" src={require("../images/google-plus.png")} alt="" />
                    </a>
                </div>
            </div>
            <div className="row">
                <h6 className="alignment lmarg"><small>--------------------OR--------------------</small></h6>
            </div>
            <div className="row alignment">
                <input className="linp" value={email} type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required />
            </div>
            <br />
            <div className="row alignment">
                <input className="linp" value={password} type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />
            </div><br/><br/><br/>
            <div className="row alignment">
                
                    <Link to="/forgetpassword">
                        <center>
                        <p><b>Forgot Your Password?</b></p>
                        </center>
                    </Link>
                    
            </div>
            <br />
            {person==="donor"?<Link to="/donorfeed"><div className="row  alignment">
                <button className="lbtn" >Sign in</button>
            </div></Link>:
            <Link to="/studentfeed"><div className="row  alignment">
                <button className="lbtn" >Sign in</button>
            </div></Link>}
            
        </div>
    )
}