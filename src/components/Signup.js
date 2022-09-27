import React from 'react'
import google from "../images/google.png"
import facebook from "../images/fb.png"
import signup from "../images/arrow.png"
import img from "../images/image.png"
const SignUp = () => {
    return (
        <div className="container">
            <div className="signup-container">
                <div className='title'>
                    <h1>Sign Up</h1>
                </div>
                <div className="line-container">
                    <div className="line"></div>
                    <div className='sub-title'><h3>Sign Up with</h3></div>
                </div>
                <div className="signup-options">
                    <div className="signup-option">
                        <img className="option-img" src={google} alt="google-login"></img>
                        <div className="option-title">Sign up with Google</div>
                    </div>
                    <div className="signup-option">
                        <img className="option-img" src={facebook} alt="facebook-login"></img>
                        <div className="option-title"> Sign up with Facebook</div>
                    </div>
                </div>
                <form className="signup-form">
                    <div className="upper-two">
                        <div className="input-container">
                            <label>Name</label>
                            <input type="text" name="name"></input>
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email" name="name"></input>
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" name="name"></input>
                    </div>
                    <div className="terms-checkbox">
                        <input className="checkbox" type="checkbox" name="checkbox"></input>
                        <label className="checkbox-text">I've read and agree with Terms of Service and our Privacy Policy</label>
                    </div>
                    <button type="submit" className="signup-button">
                        <img className="submit-img" src={signup} alt="Sign Up Button"></img>
                    </button>
                </form>
                <div className="sign-in">
                    Already have an account?
                    <button className="sign-in-btn">Sign In</button>
                </div>
            </div>
            <img className="container-image" alt="" src={img} />
        </div>
    )
}
export default SignUp