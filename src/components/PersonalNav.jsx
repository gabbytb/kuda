import {
    airtimeSubMenu, bettingSubMenu, cardlessPaymentsSubMenu, discoverPersonalSubMenu, electricitySubMenu, giftCardsSubMenu, internetSubMenu, investmentsSubMenu, kudaCardSubMenu, loansSubMenu, overDraftsSubMenu, salaryLoanSubMenu, saveFundsSubMenu, transferAndSpendSubMenu, transportSubMenu, tvCableSubMenu, 
} from "../constants";
import {
    Airtime, Betting, CardlessPayments, DiscoverPersonal, Electricity, GiftCards, Internet, Investments, KudaCard, Loans, OverDrafts, SalaryLoan, SaveFunds, TransferAndSpend, Transport, TVCable,
} from "./menu";



const PersonalNav = () => {
    return (
      <div className="dropdown-menu--wrap pt-0 dropdown-min--width">
        <div className="flex justify-between">
          <ul class="dropdown-min--width py-6">
            {
                discoverPersonalSubMenu.map((discoverPersonalMenu) => {
                    return (
                        <DiscoverPersonal key={discoverPersonalMenu.label} {...discoverPersonalMenu} />
                    );
                })
            }
            {
                transferAndSpendSubMenu.map((transferAndSpendMenu) => {
                    return (
                        <TransferAndSpend key={transferAndSpendMenu.label} {...transferAndSpendMenu} />
                    );
                })
            }
            {
                saveFundsSubMenu.map((saveFundsMenu) => {
                    return (
                        <SaveFunds key={saveFundsMenu.label} {...saveFundsMenu} />
                    );
                })
            }
            {
                investmentsSubMenu.map((investmentsMenu) => {
                    return (
                        <Investments key={investmentsMenu.label} {...investmentsMenu} />
                    );
                })
            }
            {
                kudaCardSubMenu.map((KudaCardMenu) => {
                    return (
                        <KudaCard key={KudaCardMenu.label} {...KudaCardMenu} />
                    );
                })
            }
          </ul>
          <ul class="dropdown-min--width py-6">
            <div className="menu-subtext">Payments</div>
            {
               electricitySubMenu.map((electricityMenu) => {
                    return (
                        <Electricity key={electricityMenu.label} {...electricityMenu} />
                    );
                })
            }
            {
               airtimeSubMenu.map((airtimeMenu) => {
                    return (
                        <Airtime key={airtimeMenu.label} {...airtimeMenu} />
                    );
                })
            }
            {
               internetSubMenu.map((internetMenu) => {
                    return (
                        <Internet key={internetMenu.label} {...internetMenu} />
                    );
                })
            }
            {
               giftCardsSubMenu.map((giftCardsmenu) => {
                    return (
                        <GiftCards key={giftCardsmenu.label} {...giftCardsmenu} />
                    );
                })
            }
            {
               cardlessPaymentsSubMenu.map((cardlessPaymentsMenu) => {
                    return (
                        <CardlessPayments key={cardlessPaymentsMenu.label} {...cardlessPaymentsMenu} />
                    );
                })
            }
            {
               tvCableSubMenu.map((tvCableMenu) => {
                    return (
                        <TVCable key={tvCableMenu.label} {...tvCableMenu} />
                    );
                })
            }
            {
               bettingSubMenu.map((bettingMenu) => {
                    return (
                        <Betting key={bettingMenu.label} {...bettingMenu} />
                    );
                })
            }
            {
               transportSubMenu.map((transportMenu) => {
                    return (
                        <Transport key={transportMenu.label} {...transportMenu} />
                    );
                })
            }
            <div className="menu-subtext">Credit</div>
            {
               overDraftsSubMenu.map((overDraftsMenu) => {
                    return (
                        <OverDrafts key={overDraftsMenu.label} {...overDraftsMenu} />
                    );
                })
            }
            {
               salaryLoanSubMenu.map((salaryLoanMenu) => {
                    return (
                        <SalaryLoan key={salaryLoanMenu.label} {...salaryLoanMenu} />
                    );
                })
            }
            {
               loansSubMenu.map((loanMenu) => {
                    return (
                        <Loans key={loanMenu.label} {...loanMenu} />
                    );
                })
            }
          </ul>
        </div>
      </div>
    );
};
export default PersonalNav;
