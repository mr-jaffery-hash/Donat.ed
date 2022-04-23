import React, { useRef, useState,useCallback } from 'react'
import FeedNav from "./ProfileNavBar"
import "../styles.css"
import { Link ,Redirect,useHistory} from 'react-router-dom'
const ForgotPasswordForm = () => {
  const [emailReq,SetEmailReq] = useState(null)
  return (
    <div>
        <FeedNav />
        <div class="form-gap" style={{marginTop:"100px"}}></div>
            <div class="container" style={{fontSize:"large"}}>
	    <div class="row">
		<div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon" style={{ paddingRight: "25px"}}><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input onChange={e=>SetEmailReq("1")} required id="email" name="email" placeholder="email address" class="form-control"  type="email"/>
                        </div>
                      </div>
                      <div class="form-group">
                      
                     {emailReq==="1"?<Link to="/ForgetPassword2">
                      <input name="recover-submit" class="btn btn-lg btn-primary btn-block"  value="Verify Email" type="submit" ></input>
                      </Link>:<input name="recover-submit" class="btn btn-lg btn-primary btn-block"  value="Verify Email" type="submit" ></input>}
                      
                      
                      
                      </div>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
    </div>
  )
}

export default ForgotPasswordForm;