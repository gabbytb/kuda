import { Link } from "react-router-dom";
import { SectionThreeImg } from "../assets/images"
import { ArrowRight } from "../assets/icons";



const HomeSectionThree = () => {
  return (
    <section className="home-section--three mt-36">
        <div className="px-28 py-0 flex justify-between items-center container mx-auto">

            <div className="w-4/8 home-section-three--left">
                <div className="max-w-lg space-y-8">
                    <h2>Your phone +<br/>
                        our app +<br/>
                        a debit card =<br/>
                        a simpler life.
                    </h2>
                    <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
                    <div className="section-three--cta">
                        <Link to="#" alt="create an account" className="space-x-3"> 
                            <span>Open An Account in Minutes</span>
                            <span><ArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>


            
            <div className="w-5/2 home-section-three--right relative">
                <div className="anim-wrap">
                    <SectionThreeImg />
                </div>
            </div>
        </div>
    </section>
  );
};
export default HomeSectionThree;
