import React from "react";
import FeedNavBar from "../components/FeedNavBar";
import { Sfeed } from "../components/studentfeed";
import { Router } from "react-router-dom";
import Studentfeeddata from '../data/Studentfeeddata' 
import { Postfeed } from "../components/postfeed";

function createfeed1(feeddata)
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

const DonorFeed = (props) =>{
  return(
    <div className="App">
            <div class="container">
              <br/>
              <Postfeed person="donor"/>
            </div>

            <div class = "container">            
              {Studentfeeddata.map(createfeed1)}
            </div>
    </div>
 )    
}
export default DonorFeed