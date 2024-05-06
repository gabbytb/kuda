import { Link } from "react-router-dom";
import { SectionFiveImg } from "../assets/images"
import { ArrowRight } from "../assets/icons";




const HomeSectionFive = () => {
    return (
        <section className="home-section--five mt-36">
            <div className="px-28 py-0 flex justify-between items-center container mx-auto">

                <div className="w-4/8 home-section-five--left">
                    <div className="max-w-lg space-y-8">
                        <h2>Save money as you spend it, seriously.</h2>
                        <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                        <div className="section-five--cta">
                            <Link to="#" alt="view savings" className="space-x-3"> 
                                <span>See all our Savings</span>
                                <span><ArrowRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>


                
                <div className="w-5/2 home-section-five--right relative">
                    <div className="anim-wrap">
                        <SectionFiveImg />
                    </div>
                </div>

            </div>
        </section>
    );
};
export default HomeSectionFive;
