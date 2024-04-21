import { Link } from "react-router-dom";
import { BusinessRegistrationIconURL } from "../../assets/icons";


const BusinessRegistration = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><BusinessRegistrationIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default BusinessRegistration;