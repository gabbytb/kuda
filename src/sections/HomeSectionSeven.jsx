import { Link } from "react-router-dom";
import { SectionSevenImg } from "../assets/images"
import { ArrowRight } from "../assets/icons";




const HomeSectionSeven = () => {
    return (
        <section className="home-section--seven mt-36">
            <div className="px-28 py-0 flex justify-between items-center container mx-auto">

                <div className="w-4/8 home-section-seven--left">
                    <div className="max-w-lg space-y-8">
                        <h2>We’re always happy to help you.</h2>
                        <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
                        <div className="section-seven--cta">
                            <Link to="#" alt="get help" className="space-x-3"> 
                                <span>get help</span>
                                <span><ArrowRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>


                
                <div className="w-5/2 home-section-seven--right relative">
                    <div className="anim-wrap">
                        <SectionSevenImg />
                    </div>
                </div>

            </div>
        </section>
    );
};
export default HomeSectionSeven;
