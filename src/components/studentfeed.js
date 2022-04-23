import React from "react"
import { Heart } from "./heartbutton"
export const Sfeed = (props) => {
    return (
        <div class="row">

            <div class="row">
                <a href="#" className="d-flex align-items-center " id="dropdownUser1" aria-expanded="false">
                    <img src={props.img} alt="" width="52" height="52" className="rounded-circle me-2" />
                    <strong id="logo">{props.name}</strong>
                </a>
                <label className=" newsdate">20 / 04 / 2021</label>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <h6><strong>{props.title}</strong></h6>
                    <p>{props.paragraph}</p>
                </div>
            </div>

            <div className="row">

                <div className="col-md-8">
                    <img id="newsimg" className="img-fluid" alt="..." src={props.feed} />
                </div>

            </div>
            <Heart />
        </div>

    )
} 