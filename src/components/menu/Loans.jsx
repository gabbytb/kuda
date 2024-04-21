import { Link } from "react-router-dom";
import { LoansIconURL } from "../../assets/icons";


const Loans = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><LoansIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Loans;