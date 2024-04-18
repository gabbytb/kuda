import { Link } from "react-router-dom";
import { 
    businessMenuCardOne, 
    businessMenuCardTwo 
} from "../constants";



const BusinessMenu = () => {
    return (
        <div className="py-0">
            <div className="flex justify-between>">
                <ul>
                    {
                        businessMenuCardOne.map((menuOne) => {
                            return (
                                <li key={menuOne.label}>
                                    <Link to="#" alt={menuOne.label}>
                                        <span>{menuOne.src}</span>
                                        <span>{menuOne.label}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
                
                <ul>
                    <div className="capitalize">Payments</div>
                    {                   
                        businessMenuCardTwo.map((menuSubmenuOne) => {
                            return (
                                <li key={menuSubmenuOne.label}>
                                    <Link to="#" alt={menuSubmenuOne.label}>
                                        <span>{menuSubmenuOne.src}</span>
                                        <span>{menuSubmenuOne.label}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BusinessMenu