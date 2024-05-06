import { Link } from "react-router-dom";
import { ArrowRight } from "../assets/icons";
import { SectionEightImg } from "../assets/images";





const HomeSectionEight = () => {
    
  return (
    <section className="home-section--eight mt-12">
        <div className="px-28 py-0 flex justify-between items-center container mx-auto space-x-24">

            <div className="w-5/2 home-section-eight--left relative">
                <div className="anim-wrap">
                    <SectionEightImg />
                </div>
            </div>



            <div className="w-4/8 home-section-eight--right">
                <div className="max-w-lg space-y-8">
                    <h2>Fees as clear as glass.</h2>
                    <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                    <div className="section-eight--cta">
                        <Link to="#" alt="our fees" className="space-x-3"> 
                            <span>See all our fees</span>
                            <span><ArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};
export default HomeSectionEight;
