import { Link } from "react-router-dom";


const PersonalMenuPaymentCard = ({ iconURL, label }) => {
    return (
        <li>
            <Link to="#" alt={label}>
                <span className="dropdown-link--icon">{iconURL}</span>
                <span>{label}</span>
            </Link>
        </li>
    );
};
export default PersonalMenuPaymentCard;