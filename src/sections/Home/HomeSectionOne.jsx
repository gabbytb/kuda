import { Link } from "react-router-dom";
import { 
    AppStore, PlayStore, FirstAnimation, FirstImage,
} from "./";

const HomeSectionOne = () => {
  return (
    <section className="home-section--one">
        <div className="home-section-one--wrap">
            <div className="home-section-one--48">
                <div className="home-section-48--wrap">
                    <h1 className="main-heading">The money app for Africans.</h1>
                    <p className="main-desc">Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <div className="social--links">
                        <Link to="#" alt="app store" className="mr-[11px]">
                            <AppStore />
                        </Link>
                        <Link to="#" alt="play store">
                            <PlayStore />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-section-one--52">
                <div className="home-section-52--wrap hasAnimation">
                    <div className="first--anim">
                        <FirstAnimation />
                    </div>
                    <div className="first--image">
                        <div>
                            <FirstImage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
export default HomeSectionOne;