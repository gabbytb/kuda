import { Link } from "react-router-dom";
import { SubAccountsIconURL } from "../../assets/icons";


const SubAccounts = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><SubAccountsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default SubAccounts;