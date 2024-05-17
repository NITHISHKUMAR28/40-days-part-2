import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navLinkStyle = {
    textDecoration: 'none',
    color: 'wheat'
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-color">
          <a className="navbar-brand" href="#">
            NSLearning
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item mx-5">
                <button type="button" className="btn btn-primary">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link active"
                    to={"/"}
                    aria-current="page"
                  >
                    Home <span className="visually-hidden">(current)</span>
                  </NavLink>
                </button>
              </li>
              <li className="nav-item mx-5">
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-primary">
                    <NavLink style={navLinkStyle} className="nav-link" to={"/About"}>
                      About
                    </NavLink>
                  </button>
                </div>
              </li>
              <li className="nav-item mx-5">
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                >
                  <NavLink style={navLinkStyle} className="nav-link" to={"/Services"}>
                    Services
                  </NavLink>
                </a>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <button type="button" className="btn btn-dark mx-5">
              <NavLink style={navLinkStyle} className="nav-link" to={"/Login"}>
                    Login
                  </NavLink>
              </button>
              <button type="button" className="btn btn-dark me-5">
              <NavLink style={navLinkStyle} className="nav-link" to={"/Signup"}>
                    Signup
                  </NavLink>
              </button>
              {/* <button type="button" className="btn btn-dark me-5">
              <NavLink style={navLinkStyle} className="nav-link" to={"/Student"}>
                    Student
                  </NavLink>
              </button> */}
              {/* <button type='button'>
              <NavLink style={navLinkStyle} className="nav-link" to={"/Teacher"}>
                    Teacher
              </NavLink>
              </button> */}
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
