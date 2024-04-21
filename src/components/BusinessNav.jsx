import { airtimeAndInternetDataSubMenu, billPaymentsSubMenu, businessAPISubMenu, businessRegistrationSubMenu, cashBackSubMenu, discoverBusinessSubMenu, electricitySubMenu, invoicingSubMenu, payrollBentoSubMenu, posMachineSubMenu, salaryLoanDarkSubMenu, sendMoneySubMenu, softPosSubMenu, subAccountsSubMenu, tvCableSubMenu } from "../constants";
import { DiscoverBusiness, BusinessRegistration, SoftPos, CashBack, POSMachine, Invoicing, SalaryLoanDark, BusinessApi, PayrollBento, SubAccounts, SendMoney, TVCable, Airtime, Electricity, BillPayments } from "./menu";


const BusinessNav = () => {
    return (
        <div className="dropdown-menu--wrap pt-0 dropdown-min--width">
            <div className="flex justify-between">
                <ul className="dropdown-min--width py-6">
                    {
                        discoverBusinessSubMenu.map((discoverBusinessMenu) => {
                            return (
                                <DiscoverBusiness key={discoverBusinessMenu.label} {...discoverBusinessMenu} />
                            );
                        })
                    }
                    {
                        businessRegistrationSubMenu.map((businessRegistrationMenu) => {
                            return (
                                <BusinessRegistration key={businessRegistrationMenu.label} {...businessRegistrationMenu} />
                            );
                        })
                    }
                    {
                        softPosSubMenu.map((softPosMenu) => {
                            return (
                                <SoftPos key={softPosMenu.label} {...softPosMenu} />
                            );
                        })
                    }
                    {
                        cashBackSubMenu.map((cashBackMenu) => {
                            return (
                                <CashBack key={cashBackMenu.label} {...cashBackMenu} />
                            );
                        })
                    }
                    {
                        posMachineSubMenu.map((posMachineMenu) => {
                            return (
                                <POSMachine key={posMachineMenu.label} {...posMachineMenu} />
                            );
                        })
                    }          
                    {
                        invoicingSubMenu.map((invoicingMenu) => {
                            return (
                                <Invoicing key={invoicingMenu.label} {...invoicingMenu} />
                            );
                        })
                    }          
                    {
                        salaryLoanDarkSubMenu.map((salaryLoanDarkMenu) => {
                            return (
                                <SalaryLoanDark key={salaryLoanDarkMenu.label} {...salaryLoanDarkMenu} />
                            );
                        })
                    }   
                    {
                        businessAPISubMenu.map((businessApiMenu) => {
                            return (
                                <BusinessApi key={businessApiMenu.label} {...businessApiMenu} />
                            );
                        })
                    }
                    {
                        payrollBentoSubMenu.map((payrollBentoMenu) => {
                            return (
                                <PayrollBento key={payrollBentoMenu.label} {...payrollBentoMenu} />
                            );
                        })
                    }
                    {
                        subAccountsSubMenu.map((subAccountsMenu) => {
                            return (
                                <SubAccounts key={subAccountsMenu.label} {...subAccountsMenu} />
                            );
                        })
                    }
                </ul>
                <ul className="dropdown-min--width py-6">
                    <div className="menu-subtext">Payments</div>
                    {
                        sendMoneySubMenu.map((sendMoneyMenu) => {
                            return (
                                <SendMoney key={sendMoneyMenu.label} {...sendMoneyMenu} />
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
                        airtimeAndInternetDataSubMenu.map((airtimeAndInternetDataMenu) => {
                            return (
                                <Airtime key={airtimeAndInternetDataMenu.label} {...airtimeAndInternetDataMenu} />
                            );
                        })
                    } 
                    {
                        electricitySubMenu.map((electricityMenu) => {
                            return (
                                <Electricity key={electricityMenu.label} {...electricityMenu} />
                            );
                        })
                    }                  
                    {
                        billPaymentsSubMenu.map((billPaymentsMenu) => {
                            return (
                                <BillPayments key={billPaymentsMenu.label} {...billPaymentsMenu} />
                            );
                        })
                    }     
                </ul>
            </div>
        </div>
    );
};
export default BusinessNav;