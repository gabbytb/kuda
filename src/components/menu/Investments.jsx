import { Link } from "react-router-dom";
import { InvestmentsIconURL } from "../../assets/icons";



const Investments = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><InvestmentsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Investments;