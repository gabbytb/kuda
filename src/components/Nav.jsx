import { Link } from "react-router-dom";
import { HeaderLogo, Dropdown, NigeriaFlag, SignupButton, PersonalNav, BusinessNav, CompanyNav, HelpNav } from "./";
import { signUpButton } from "../constants";





const Nav = () => {
  return (
    <header className="header">
      <div className="header-wrap nav-container">
        <div className="header-left">
          <Link to="/" alt="logo" className="logo">
            <HeaderLogo />
          </Link>

          <ul className="main-menu-wrap">
            <li className="nav-menu" data-toggle="dropdown">
              <p id="menuDropdown" className="no-link color-primary">Personal
                <span className="dropDown"><Dropdown /></span>
              </p>
              <div className="dropdown-menu">
                <PersonalNav />
              </div>
            </li> 
            <li className="nav-menu" data-toggle="dropdown">
              <p id="menuDropdown" className="no-link color-primary">Business
                <span className="dropDown"><Dropdown /></span>
              </p>
              <div className="dropdown-menu">
                <BusinessNav />
              </div>
            </li>   
            <li className="nav-menu" data-toggle="dropdown">
              <p id="menuDropdown" className="no-link color-primary">Company
                <span className="dropDown"><Dropdown /></span>
              </p>
              <div className="dropdown-menu">
                <CompanyNav />
              </div>
            </li>
            <li className="nav-menu" data-toggle="dropdown">
              <p id="menuDropdown" className="no-link color-primary">Help
                <span className="dropDown"><Dropdown /></span>
              </p>
              <div className="dropdown-menu">
                <HelpNav />
              </div>
            </li> 
          </ul>
        </div>
          
        <div className="header-center">
          {
            signUpButton.map((item) => {
              return (
                <SignupButton key={item.label} label={item.label} />
              );
            })
          }
        </div>

        <div className="header-right has-left-margin" data-toggle="dropdown">
          <div className="no-link">
            <div className="dropDown nationality">
              <NigeriaFlag />
            </div>
          </div>
          <div className="dropdown-menu">

          </div>
        </div>

        <div className="mobile-toggle">
          <div className="hamburger">
            <div className="hamburger--inner"></div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Nav;