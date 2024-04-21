import { Link } from "react-router-dom";
import { TVCableIconURL } from "../../assets/icons";


const TVCable = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><TVCableIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default TVCable;