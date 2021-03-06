import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPageNavBar from "../components/MainPageNavBar";
import { Login } from "./login";
{ }
const MainPage = () => {
    return (
        // <Router>
        <div>
            <MainPageNavBar />
            <header className="py-5 bg-image-full" style={{ backgroundImage: 'url(https://source.unsplash.com/wfh8dDlNFOk/1600x900)' }} >
                <div className="text-center my-5">
                    <h1 className="text-white fs-3 fw-bolder">Donat.ed</h1>
                    <p className="text-white-50 mb-0">Connecting deserving students and generous donors</p>
                </div>
            </header>
            <section className="py-5 background">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Student Portal</h2>
                            <p className="lead">This website lets students maintain their user profile.</p>
                            <p className="mb-0"> </p>
                        </div>
                    </div>
                </div>
                <div className="container background">
                    <div className="row justify-content-center">
                        <div className="col-sm-3">
                        <Link to='/studentlogin'>
                            <button className="btn btn-info">
                                Login as Student
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Donor Portal</h2>
                            <p className="lead">This website lets students maintain their user profile.</p>
                            <p className="mb-0">Login to Donor or Student.</p>
                        </div>
                    </div>
                </div>
                <div className="container background">
                    <div className="row justify-content-center">
                        <div className="col-sm-3">
                            <Link to="/donorlogin">
                            <button className="btn btn-info">
                                Login as Donor
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
{/* 
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
        </Switch> */}
        </div>

        // {/* </Router> */}
    )
}

export default MainPage