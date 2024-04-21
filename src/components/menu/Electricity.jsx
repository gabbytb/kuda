import { Link } from "react-router-dom";
import { ElectricityIconURL } from "../../assets/icons";


const Electricity = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><ElectricityIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default Electricity;