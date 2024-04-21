import { Link } from "react-router-dom";
import { InvoicingIconURL } from "../../assets/icons";


const Invoicing = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><InvoicingIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Invoicing;