import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../assets/netflix.jpg";
import { validate } from "../utils/validator";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [validationError, setValidationError] = useState("");
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(emailRef.current.value, passwordRef.current.value);
    setValidationError(isValid);
    if (isValid) return;
  };


const getData = () => {
  console.log("i am getting called")
}

const debounce = (func,d) => {
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this,args)
    },d)
  }
}

const callSpecial = debounce(getData,300)
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-auto" src={background} alt="backGround" />
      </div>
      <form
        onSubmit={onSubmit}
        className="w-3/12 absolute bg-black p-6 bg-opacity-80 mx-auto my-36 text-center right-0 left-0"
      >
        <h1 className=" text-white font-extrabold text-3xl ">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            onKeyUp={callSpecial}
            placeholder="User Name"
            className="w-64 p-2 my-4 bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email address"
          className="w-64 p-2 my-4 bg-gray-700"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-64 p-2 my-4 bg-gray-700"
        />
        <p className="text-red-500">{validationError}</p>
        <button type="submit" className="bg-red-500 w-28 rounded-lg p-2 m-4">
          Submit
        </button>
        <p className="text-white cursor-pointer" onClick={handleSignUp}>
          {isSignUp
            ? "Do you have an account Sign In here"
            : "Don't have an account Sign Up here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
