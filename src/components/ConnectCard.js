import React from "react";
import '../styles.css'

const ConnectCard = ({profiles}) => {
    return(
        <div className="cardStyles container cardUpperDistance">
            <div className="row">
                <div className="col-md d-flex align-items-center cardHeading">
                    <h4 className="profileHeadings">
                        Connect
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5">
                    <div>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-facebook"></a>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default ConnectCard