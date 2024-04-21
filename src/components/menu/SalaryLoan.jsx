import { Link } from "react-router-dom";
import { SalaryLoanIconURL } from "../../assets/icons";


const SalaryLoan = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><SalaryLoanIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default SalaryLoan;