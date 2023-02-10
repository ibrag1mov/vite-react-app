import axios from "axios";
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:8080/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) =>{
        if(data.status === 200){
          setToken(data.data.accessToken);
          setUser(data.data.user);
          navigate('/')
        }
      }   
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-50 mx-auto my-5 p-5 shadow rounded">
      <h2 className="h1 text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          className="form-control mb-3"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="form-control mb-3"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary px-5 d-block mx-auto rounded-pill">
          SEND
        </button>
      </form>
    </div>
  );
};
