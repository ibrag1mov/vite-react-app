import axios from "axios";
import React, { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Regisetr = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const {setToken} = useContext(AuthContext);
  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if(data.status === 201){
          setToken(data.data.accessToken)
          setUser(data.data.user)
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-50 mx-auto my-5 p-5 shadow rounded">
      <h2 className="h1 text-center mb-4">Regisetr</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={firstNameRef}
          className="form-control mb-3"
          type="text"
          placeholder="First name"
        />
        <input
          ref={lastNameRef}
          className="form-control mb-3"
          type="text"
          placeholder="Last name"
        />
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
