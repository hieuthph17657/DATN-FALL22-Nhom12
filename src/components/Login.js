import React from "react";
import '../styles/css-app/log.css';
import { Facebook, Mail } from "react-feather";

function Login() {
    return (
        <>
            <div className=" container-fluid log">
                <div className="log-content text-center">
                    <div className="box box-form">
                        <h1 className="font-btn" style={{ fontSize: "40px" }}>Sign in</h1>
                        <div className="d-flex justify-content-center">
                            <div className="lgo text-center text-align-center pe-1 " ><Facebook className="logo-content" size={30} /></div>
                            <div className="lgo text-center text-align-center pe-1 "><Mail className="logo-content" size={30} /></div>
                        </div>
                        <p className="mt-3">or use your account</p>
                        <div className="form mt-3">
                            <form>
                                <div className="ip-div">
                                    {/* <Mail className="ic-ip" size={30}></Mail> */}
                                    <input className="form-control ip mt-2" placeholder="Email" />
                                </div>
                                <div className="ip-div">
                                    {/* <Lock className="ic-ip" size={30}></Lock> */}
                                    <input className="form-control ip mt-2 mb-3" placeholder="Password" />
                                </div>

                                <a className="forgot-link" href="">Forgot your password</a>
                                <br></br>
                                <button className="btn-signin mt-2"><span className="font-btn">Sign in</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="box box-text">
                        <h1>Hello,Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <a className="btn btn-signup font-btn">Sign Up</a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Login;