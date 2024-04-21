import { Link } from "react-router-dom";
import { BettingIconURL } from "../../assets/icons";


const Betting = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><BettingIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Betting;