import { Link } from "react-router-dom";
import { 
  helpMenu,
} from "../constants";



const HelpMenu = () => {
  return (
    <ul className="dropdown-menu--wrap">
      {
        helpMenu.map((item) => {
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
export default HelpMenu; 