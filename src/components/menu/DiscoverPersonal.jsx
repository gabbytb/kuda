import { Link } from "react-router-dom";
import { DiscoverPersonalIconURL } from "../../assets/icons";


const DiscoverPersonal = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><DiscoverPersonalIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default DiscoverPersonal;