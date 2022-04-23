import React, { useState,useEffect } from "react"
import {Link} from "react-router-dom"
export const Postfeed = (props) => {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')
    const [file, setFile] = useState(null)
    const [person,setPerson]=useState('')
    useEffect(()=>{
        setPerson(props.person)
    });
    return (
        <div className="row">
            <div className="col-md-8">
                <form id="postform">       
                    {person==="student"?<Link to="/studentprofile">
                    <a href="#" className="d-flex align-items-center " aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="52" height="52" className="rounded-circle me-2" style={{ marginLeft: "5px" }} />
                    </a>
                    </Link>:<Link to="/donorprofile">
                    <a href="#" className="d-flex align-items-center " aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="52" height="52" className="rounded-circle me-2" style={{ marginLeft: "5px" }} />
                    </a>
                    </Link>}             
                    
                    <hr />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="pform" placeholder="Title" />
                    <textarea value={status} onChange={(e) => setStatus(e.target.value)} className="pform" placeholder="Post Something.." row="2" />
                    <hr />
                    <div className="bform">
                        <input value={file} onChange={(e) => setTitle(e.target.files[0])} type="file" id="img" name="img" accept="image/*" />
                        <button className="btn btn-dark">Post</button>
                        <br />
                        <br />
                    </div>
                </form>
            </div>
        </div>
    )
}