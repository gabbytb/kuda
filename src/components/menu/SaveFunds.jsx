import { Link } from "react-router-dom";
import { SaveFundsIconURL } from "../../assets/icons";


const SaveFunds = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><SaveFundsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default SaveFunds;