import { Link } from "react-router-dom";
import { DiscoverPersonal, TransferAndSpend, SaveFunds, Investments, KudaCard, Electricity, Airtime, Internet, GiftCards, CardlessPayments, TVCable, Betting, Transport, OverDrafts, SalaryLoan, Loans } from "./menu";



const PersonalNav = () => {
    return (
      <div className="dropdown-menu--wrap dropdown-min--width">
        <div className="flex justify-between">
          <ul class="dropdown-min--width py-6">
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><DiscoverPersonal /></span>
                    <span>Discover Personal</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><TransferAndSpend /></span>
                    <span>Transfer and Spend</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><SaveFunds /></span>
                    <span>Save</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Investments /></span>
                    <span>Investments</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><KudaCard /></span>
                    <span>Kuda Card</span>
                </Link>
            </li>
          </ul>
          <ul class="dropdown-min--width py-6">
            <div className="menu-subtext">Payments</div>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Electricity /></span>
                    <span className="capitalize">Electricity</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Airtime /></span>
                    <span className="capitalize">Airtime</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Internet /></span>
                    <span className="capitalize">Internet</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><GiftCards /></span>
                    <span className="capitalize">gift cards</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><CardlessPayments /></span>
                    <span className="capitalize">cardless payments</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><TVCable /></span>
                    <span className="capitalize">TV</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Betting /></span>
                    <span className="capitalize">Betting</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Transport /></span>
                    <span className="capitalize">Transport</span>
                </Link>
            </li>
            <div className="menu-subtext">Credit</div>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><OverDrafts /></span>
                    <span className="capitalize">Overdrafts</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><SalaryLoan /></span>
                    <span className="capitalize">Salary Loan</span>
                </Link>
            </li>
            <li>
                <Link to="#" alt="">
                    <span className="dropdown-link--icon"><Loans /></span>
                    <span className="capitalize">Loans</span>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};
export default PersonalNav;
