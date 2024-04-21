import { Link } from "react-router-dom";
import TransferAndSpendIconURL from "../../assets/icons/TransferAndSpendIconURL";


const TransferAndSpend = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><TransferAndSpendIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default TransferAndSpend;