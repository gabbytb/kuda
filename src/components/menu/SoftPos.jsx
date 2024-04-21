import { Link } from "react-router-dom";
import { SoftPosIconURL } from "../../assets/icons";


const SoftPos = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><SoftPosIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default SoftPos;