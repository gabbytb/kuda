import { Link } from "react-router-dom";
import { 
    AppStore, PlayStore, FirstImage
} from "./";

const HomeSectionOne = () => {
  return (
    <div className="home-section--one max-container">
        <div className="home-section--wrap">
            <div className="home-twin--cards">
                <div className="home-section-one--48">
                    <div className="section-48--wrap">
                        <h1 className="main-heading">The money app for Africans.</h1>
                        <p className="main-desc">Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                        <div className="social--links">
                            <Link to="" alt="app store" className="mr-[11px]">
                                <AppStore />
                            </Link>
                            <Link to="" alt="play store">
                                <PlayStore />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-section-one--52">
                    <div className="section-52--wrap hasAnimation">
                        <div className="first-anim">
                            <FirstImage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default HomeSectionOne;