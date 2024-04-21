import { Link } from "react-router-dom";
import { GiftCardsIconURL } from "../../assets/icons";


const GiftCards = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><GiftCardsIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default GiftCards;