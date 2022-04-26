import React from "react";
import FeedNavBar from "../components/FeedNavBar";
import { Sfeed } from "../components/studentfeed";
import { Router } from "react-router-dom";
import Feeddata from "../data/Feeddata"
import { Postfeed } from "../components/postfeed";
import ProfileNavBar from "../components/ProfileNavBar";
function createfeed(feeddata)
{
    return(
        <Sfeed 
        key = {feeddata.id}
        img = {feeddata.img}
        name = {feeddata.name}
        title = {feeddata.title}
        paragraph = {feeddata.paragraph} 
        feed = {feeddata.feed}
        />
    )
} 
const StudentFeed = (props) => {
    return(
       <div className='background'>


                 <div class="container">                 
                 <br/>
                 <Postfeed person="student"/>
                 <br/>
                 </div>

                <div class = "container">            
                   {Feeddata.map(createfeed)}
                </div>
        </div>
    )

}


export default StudentFeed