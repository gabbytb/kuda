import { businessMenuOne, businessMenuTwoPayments } from "../constants";
import { BusinessMenuCard, BusinessMenuPaymentsCard } from "./menu";


const BusinessNav = () => {
    return (
        <div className="flex justify-between">
            <ul className="dropdown-min--width py-6">
                {
                    businessMenuOne.map((menu) => {
                        return (
                            <BusinessMenuCard key={menu.label} {...menu} />
                        );
                    })
                }
            </ul>
            <ul className="dropdown-min--width py-6">
                <div className="menu-subtext">Payments</div>
                {
                    businessMenuTwoPayments.map((menu) => {
                        return (
                            <BusinessMenuPaymentsCard key={menu.label} {...menu} />
                        );
                    })
                }
            </ul>
        </div>
    );
};
export default BusinessNav;