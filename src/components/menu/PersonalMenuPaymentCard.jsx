import { Link } from "react-router-dom";


const PersonalMenuPaymentCard = ({ imgURL, label }) => {
    return (
        <li>
            <Link to="#" alt={label}>
                <span className="dropdown-link--icon">{imgURL}</span>
                <span>{label}</span>
            </Link>
        </li>
    );
};
export default PersonalMenuPaymentCard;