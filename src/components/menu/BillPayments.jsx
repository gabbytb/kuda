import { Link } from "react-router-dom";
import { BillPaymentsIconURL } from "../../assets/icons";


const BillPayments = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><BillPaymentsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default BillPayments;