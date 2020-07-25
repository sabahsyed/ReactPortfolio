import React from "react";
import { Link, useLocation } from "react-router-dom";


function Nav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div className = "navUl">
    <ul className="nav justify-content-center navCustom ">
      <li className="nav-item animate__animated animate__fadeIn">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item animate__animated animate__fadeIn">
        <Link
          to="/Resume"
          className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item animate__animated animate__fadeIn">
        <Link
          to="/Projects"
          className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item animate__animated animate__fadeIn">
        <Link
          to="/Links"
          className={location.pathname === "/Links" ? "nav-link active" : "nav-link"}
        >
          Links
        </Link>
      </li>
    </ul>
    </div>
  
  );

  
}

export default Nav;
