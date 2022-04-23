import React from 'react'
import FeedNav from "./ProfileNavBar"
import "../styles.css"
const ForgotPasswordForm2 = () => {
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
                    <div class="spinner-grow" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                  <h2 class="text-center">Waiting...</h2>
                  <p>Use the link sent to you on your email to complete verification.</p>
                  
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
    </div>
  )
}

export default ForgotPasswordForm2;