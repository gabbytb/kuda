import { Link } from "react-router-dom";
import { TransportIconURL } from "../../assets/icons";


const Transport = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><TransportIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Transport;