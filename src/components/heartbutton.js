import React, {useState} from 'react';

export const Heart = () =>{
    const [likestatus, setCount] = useState({
    count: 12,
    status: 1 
    });
return(
<div >

    <br/>
    <button class="heartf"   onClick={() => setCount( likestatus.status == 1 ? (likestatus.status = 0 , likestatus.count - 1) : (likestatus.status = 1 , likestatus.count + 1)   ) }>
        <div class= "heart-btn" >
            {likestatus.status == 1 ?
                <div class="contentf heart-active">
                  <span class="heart heart-active"></span>
                  <span class="textheart heart-active">Like</span>
                   <span class="numb heart-active">{likestatus.count}</span>
                </div>
            :
            <div class="contentf ">
                  <span class="heart "></span>
                  <span class="textheart ">Like</span>
                   <span class="numb ">{likestatus.count}</span>
                </div>

            }
            
        </div>
    </button>

</div>

);
}