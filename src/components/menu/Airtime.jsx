import { Link } from "react-router-dom";
import { AirtimeIconURL } from "../../assets/icons";


const Airtime = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><AirtimeIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Airtime;