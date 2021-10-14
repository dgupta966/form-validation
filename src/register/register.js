import React, { useState } from "react";
import "./main.css";

const Register = () => {
  const registerIntialObj = {
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
  };
  const [isSubmit, setIsSubmit] = useState(false);
  const [registerObject, setRegisterObject] = useState(registerIntialObj);

  const onChangeHandler = (e) => {
    let updateRegisterObj = { ...registerObject };
    updateRegisterObj[e.target.name] = e.target.value;
    setRegisterObject(updateRegisterObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    const { name, email, password, repeatPassword } = registerObject;
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      repeatPassword !== ""
    ) {
      setRegisterObject(registerIntialObj); //set to initial object and empty after successful submission
      setIsSubmit(false);
      alert("Register Succesfull " + name);
    }
  };

  const { name, email, password, repeatPassword } = registerObject;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          {isSubmit && name === "" && (
            <div className="invalid-feedback">* Please enter firstname</div>
          )}
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          {isSubmit && email === "" && (
            <div className="invalid-feedback">* Please enter email</div>
          )}
          {isSubmit && email && !email.match(mailformat) && (
            <div className="invalid-feedback">* Invalid mail</div>
          )}

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            value={password}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          {isSubmit && password === "" && (
            <div className="invalid-feedback">* Please enter password</div>
          )}
          {isSubmit && password && password.length < 6 && (
            <div className="invalid-feedback">
              * Password must be atleast 6 characters{" "}
            </div>
          )}

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            id="psw-repeat"
            name="repeatPassword"
            value={repeatPassword}
            minLength={6}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          {isSubmit && repeatPassword === "" && (
            <div className="invalid-feedback">
              * Please enter repeat password
            </div>
          )}
          {isSubmit && repeatPassword && password !== repeatPassword && (
            <div className="invalid-feedback">
              * password and repeat password must be same
            </div>
          )}
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
