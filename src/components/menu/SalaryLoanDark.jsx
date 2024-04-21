import { Link } from "react-router-dom";
import { SalaryLoanDarkIconURL } from "../../assets/icons";


const SalaryLoanDark = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><SalaryLoanDarkIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default SalaryLoanDark;