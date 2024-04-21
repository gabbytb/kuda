import { Link } from "react-router-dom";
import { POSMachineIconURL } from "../../assets/icons";


const POSMachine = ({ label }) => {
    return (
      <li>
          <Link to="#" alt={label}>
              <span className="dropdown-link--icon"><POSMachineIconURL /></span>
              <span>{label}</span>
          </Link>
      </li>
    );
};
export default POSMachine;