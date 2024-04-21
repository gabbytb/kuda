import { Link } from "react-router-dom";
import { BusinessApiIconURL } from "../../assets/icons";


const BusinessApi = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><BusinessApiIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default BusinessApi;