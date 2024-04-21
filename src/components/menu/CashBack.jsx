import { Link } from "react-router-dom";
import { CashBackIconURL } from "../../assets/icons";


const CashBack = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><CashBackIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default CashBack;