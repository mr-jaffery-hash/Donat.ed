import React from "react";
 const Registration = () => {
    return (
        <div class="container">
    
       

        <div class="row">
            <h2 >Registration Form</h2>
            <br/>
        </div>

    <br/>
    <div class="row ">
        
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">First Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
        </div>
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
        </div>

    </div>
     <br/>
    <div class="row">
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
        </div>
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">CNIC</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CNIC"/>
        </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-1">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                Male
                </label>
            </div>
       </div>
       <div class="col-1">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
           Female
            </label>
        </div>
   </div>
    </div>
    <br/>
    <div class="row">
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"/>
        </div>
        <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">Re-type Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Re-type Password"/>
        </div>
    </div>
    <br/>
    <br/>
    <div class="row">
        <div class="d-grid gap-2 col-8">
            <button class="btn btn-dark" type="button">Register Now</button>            
        </div>
    </div>
 
</div>
    );

}
export default Registration;