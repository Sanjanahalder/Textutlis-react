import React from "react";
import propTypes from 'prop-types';
import {Link} from "react-router-dom"
 
export default function Navbar(props) {
   
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">{props.about}</Link>
        </li>
      
       
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/">Action</Link></li>
            <li><Link className="dropdown-item" href="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/">Something else here</Link></li>
          </ul>
      </ul>
      <div className={`form-check form-switch text-${props.mode==="light"? "dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
)
}
Navbar.propTypes= {
  title: propTypes.string.isRequired,
  about:propTypes.string.isRequired
}
Navbar.defaultProps={
  title: 'set time',
  about:'About '
};
