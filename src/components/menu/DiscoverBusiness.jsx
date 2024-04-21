import { Link } from "react-router-dom";
import { DiscoverBusinessIconURL } from "../../assets/icons";


const DiscoverBusiness = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><DiscoverBusinessIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default DiscoverBusiness;