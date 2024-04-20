import { Link } from "react-router-dom";
import { DiscoverBusiness, BusinessRegistration, SoftPos, CashBack, POSMachine, Invoicing, SalaryLoanDark, BusinessAPI, PayrollBento, SubAccounts, SendMoney, TVCable, Airtime, Electricity, BillPayments } from "./menu";


const BusinessNav = () => {
    return (
        <div className="dropdown-menu--wrap dropdown-min--width">
            <div className="flex justify-between">
                <ul class="drop-min--width py-6">
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><DiscoverBusiness /></span>
                            <span>Discover Business</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><BusinessRegistration /></span>
                            <span>Business Registration</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><SoftPos /></span>
                            <span>Soft POS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><CashBack /></span>
                            <span>Cash Back</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><POSMachine /></span>
                            <span>POS Machine</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><Invoicing /></span>
                            <span>Invoicing</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><SalaryLoanDark /></span>
                            <span>Salary Loan</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><BusinessAPI /></span>
                            <span>Business API</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><PayrollBento /></span>
                            <span>Payroll wuth Bento</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><SubAccounts /></span>
                            <span>Sub Accounts</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <div className="menu-subtext">Payments</div>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><SendMoney /></span>
                            <span>Send Money</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><TVCable /></span>
                            <span>TV</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><Airtime /></span>
                            <span>Airtime & Internet Data</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><Electricity /></span>
                            <span>Electricity</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" alt="">
                            <span className="dropdown-link--icon"><BillPayments /></span>
                            <span>Bill Payments</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default BusinessNav;