import { Link } from "react-router-dom";
import { SendMoneyIconURL } from "../../assets/icons";


const SendMoney = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><SendMoneyIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default SendMoney;