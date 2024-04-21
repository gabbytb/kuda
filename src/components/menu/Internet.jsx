import { Link } from "react-router-dom";
import { InternetIconURL } from "../../assets/icons";



const Internet = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><InternetIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Internet;