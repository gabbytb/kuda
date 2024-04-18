import { Link } from "react-router-dom";
import { 
    personalMenuCardOne, 
    personalMenuCardSubMenuOne, 
    personalMenuCardSubMenuTwo 
} from "../constants";



const PersonalMenu = () => {
    return (
        <div className="py-0">
            <div className="flex justify-between>">
                <ul>
                    {
                        personalMenuCardOne.map((menuOne) => {
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
                        personalMenuCardSubMenuOne.map((menuSubmenuOne) => {
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
                    <div className="capitalize">Credit</div>
                    {
                        personalMenuCardSubMenuTwo.map((menuSubmenuTwo) => {
                            return (
                                <li key={menuSubmenuTwo.label}>
                                    <Link to="#" alt={menuSubmenuTwo.label}>
                                        <span>{menuSubmenuTwo.src}</span>
                                        <span>{menuSubmenuTwo.label}</span>
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

export default PersonalMenu