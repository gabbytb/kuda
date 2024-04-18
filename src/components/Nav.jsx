import { Link } from "react-router-dom";
import {
  HeaderLogo, Dropdown
} from "./";
import { 
  navLinks,
} from "../constants";



const Nav = () => {
  return (
    <header className="flex justify-between items-center">
        <div className="flex items-center">
          
          <Link to="/" alt="" className="logo">
            <HeaderLogo />
          </Link>


          <ul className="flex">
            {
              navLinks.map((menu) => {
                return (
                  <li className="nav-menu" data-toggle="dropdown" key={menu.label}>
                    <p className="no-link color-primary">{menu.label} 
                      <span className="dropDown"><Dropdown /></span>
                    </p>
                    <div className="dropdown-menu">
                    
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="mobile-toggle">
          <div className="hamburger">
            <div className="hamburger--inner"></div>
        <div className="mobile-toggle">
          <div className="hamburger">
            <div className="hamburger--inner"></div>
          </div>
        </div>
    </header>
  );
};


export default Nav;