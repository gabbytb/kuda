import { Link } from "react-router-dom";
import { OverDraftsIconURL } from "../../assets/icons";


const OverDrafts = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><OverDraftsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default OverDrafts;