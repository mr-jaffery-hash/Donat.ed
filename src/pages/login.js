import React from "react";
export const Login = () =>{
    return(
        <div class="container logincont">
        
        <div class="row ">            
        <h2 class="alignment"><strong>Login to Your Account</strong></h2>
        </div>
        <div class="row">
        <h6 class="alignment"><small>Login using social network</small></h6>
        <br/>
        </div>
  <div class="row">
      
      <div class="alignment">
            <a href="" >
                <img class="licon" src= {require("../images/facebook(2).png")} alt=""  />
            </a>
            <a href="">
                <img class="licon" src= {require("../images/google-plus.png")} alt="" /> 
            </a>
      </div>

      
  </div>
   
  <div class="row">

    <h6 class="alignment lmarg"><small>--------------------OR--------------------</small></h6>
   
   </div>

   <div class="row alignment">
      <input class="linp" type="text" placeholder="Email" />
   </div>
   <br/>

   <div class="row alignment">
     <input class="linp" type = "password" placeholder="Password" />
   </div>
   <br/>

   <div class="row  alignment">
       <button class="lbtn" >Sign in</button>
   </div>
    

</div>
    )
}