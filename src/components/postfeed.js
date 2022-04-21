export const Postfeed = () =>{
    return(
        <div class="row">
        <div class="col-md-8">
          <form id="postform">
           <a href="#" className="d-flex align-items-center " aria-expanded="false">
                <img src= "https://github.com/mdo.png" alt="" width="52" height="52" className="rounded-circle me-2" style={{marginLeft: "5px"}}/>
            </a>
            <hr/>
             <input class = "pform" placeholder="Title" />
             <textarea class = "pform" placeholder="Post Something.." row = "2"/>
             <hr/>
             <div class="bform">
             <input type="file" id="img" name="img" accept="image/*"/>
             <button class="btn btn-dark">Post</button>  
             <br/>
             <br/>           
             </div>
          </form>
          </div>
        </div>
    )
}