import { Link } from "react-router-dom";
import { 
  companyMenu,
} from "../constants";



const CompanyNav = () => {
  return (
    <ul className="dropdown-menu--wrap">
      {
        companyMenu.map((item) => {
          return (
            <li key={item.label}>
              <Link to="" alt="">
                <span>{item.label}</span>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
};
export default CompanyNav;