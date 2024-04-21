import { Link } from "react-router-dom";
import { KudaCardIconURL } from "../../assets/icons";


const KudaCard = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><KudaCardIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default KudaCard;