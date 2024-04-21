import { Link } from "react-router-dom";
import { CardlessPaymentsIconURL } from "../../assets/icons";


const CardlessPayments = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><CardlessPaymentsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default CardlessPayments;