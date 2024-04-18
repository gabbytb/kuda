import { Link } from "react-router-dom";
import { 
    navLinks,
  
} from "../constants";
import { 
    hamburger 
} from "../assets/icons";
import HeaderLogo from "./HeaderLogo";
import DropDownIcon from "./DropDownIcon";




const Nav = () => {
  return (
    <header className="">
        <div className="flex justify-between">
          
          <Link to="/" alt="" className="logo">
            <HeaderLogo />
          </Link>


          <ul className="flex">
            {
              navLinks.map((menu) => {
                return (
                  <li key={menu.label}>
                    <p>{menu.label} 
                      <span className="dropDown"><DropDownIcon /></span>
                    </p>
                    <div className="dropdown-menu">

                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </div>
    </header>
  );
};


export default Nav;