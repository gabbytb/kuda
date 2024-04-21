import { Link } from "react-router-dom";
import { PayrollBentoIconURL } from "../../assets/icons";


const PayrollBento = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><PayrollBentoIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default PayrollBento;