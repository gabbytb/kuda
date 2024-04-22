import { personalMenuOne, personalMenuTwoPayments, personalMenuTwoCredit } from "../constants";
import { PersonalMenuOneCard, PersonalMenuPaymentCard, PersonalMenuCreditCard } from "./menu";



const PersonalNav = () => {
    return (
      <div className="flex justify-between">
        <ul class="dropdown-min--width py-6">
          {
              personalMenuOne.map((menu) => {
                  return (
                      <PersonalMenuOneCard key={menu.label} {...menu} />
                  );
              })
          }
        </ul>
        <ul class="dropdown-min--width py-6">
          <div className="menu-subtext">Payments</div>
          {
              personalMenuTwoPayments.map((menu) => {
                  return (
                      <PersonalMenuPaymentCard key={menu.label} {...menu} />
                  );
              })
          }
          <div className="menu-subtext">Credit</div>
          {
              personalMenuTwoCredit.map((menu) => {
                  return (
                      <PersonalMenuCreditCard key={menu.label} {...menu} />
                  );
              })
          }
        </ul>
      </div>
    );
};
export default PersonalNav;
