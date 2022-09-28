import React from 'react';
import validation from './Validate';
import { useState, useEffect } from 'react';
const SignUp = ({ submitForm }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="signup-container">
        <div className="title">
          <h1>Sign Up</h1>
        </div>
        <div className="line-container">
          <div className="line"></div>
          <div className="sub-title">
            <h3>Sign Up with</h3>
          </div>
        </div>
        <div className="signup-options">
          <button className="signup-options-btn">
            <div className="signup-option">
              <img
                className="option-img"
                src="https://raw.githubusercontent.com/sroy-be18/react-v4fa2j/main/google.png"
                alt="google-login"
              ></img>
              <div className="option-title">Sign up with Google</div>
            </div>
          </button>
          <button className="signup-options-btn">
            <div className="signup-option">
              <img
                className="option-img"
                src="https://raw.githubusercontent.com/sroy-be18/react-v4fa2j/main/fb.png"
                alt="facebook-login"
              ></img>
              <div className="option-title"> Sign up with Facebook</div>
            </div>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="upper-two">
            <div className="input-container">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              ></input>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              ></input>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="terms-checkbox">
            <input className="checkbox" type="checkbox" name="checkbox"></input>
            <label className="checkbox-text">
              I've read and agree with Terms of Service and our Privacy Policy
            </label>
          </div>
          <button type="submit" className="signup-button">
            <img
              className="submit-img"
              src="https://raw.githubusercontent.com/sroy-be18/react-v4fa2j/main/arrow.png"
              alt="Sign Up Button"
            ></img>
          </button>
        </form>
        <div className="sign-in">
          Already have an account?
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>
      <img
        className="container-image"
        alt=""
        src="https://raw.githubusercontent.com/sroy-be18/react-v4fa2j/main/image.png"
      />
    </div>
  );
};
export default SignUp;
