import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

export const PrivateHeader = () => {

  const { user, setUser } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link className="fs-4 text-white text-decoration-none" to="/">
            LOGO
          </Link>

          <NavLink className={({isActive}) => isActive ? "text-white ms-3" : " ms-3 text-white text-decoration-none"} to="/posts">
            Posts
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "text-white ms-3" : "ms-3 text-white text-decoration-none"} to="/users">
            Users
          </NavLink>

          <button
            onClick={()=>{
              setToken('');
              setUser('');
              navigate('/')
            }}
            style={{ width: "40px", height: "40px" }}
            className="btn btn-warning rounded-circle ms-auto d-flex align-items-center justify-content-center"
          >
            {user.first_name.at(0).toUpperCase() +'.'+ user.last_name.at(0).toUpperCase()} 
          </button>
        </div>
      </div>
    </header>
  );
};
