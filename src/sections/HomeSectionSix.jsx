import { Link } from "react-router-dom";
import { ArrowRight } from "../assets/icons";
import { SectionSixImg } from "../assets/images";





const HomeSectionSix = () => {
    
  return (
    <section className="home-section--six mt-12">
        <div className="px-28 py-0 flex justify-between items-center container mx-auto space-x-24">

            <div className="w-5/2 home-section-six--left relative">
                <div className="anim-wrap">
                    <SectionSixImg />
                </div>
            </div>



            <div className="w-4/8 home-section-six--right">
                <div className="max-w-lg space-y-8">
                    <h2>It’s your money, we just help you manage it.</h2>
                    <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
                    <div className="section-six--cta">
                        <Link to="#" alt="about cards" className="space-x-3"> 
                            <span>Learn more about Cards</span>
                            <span><ArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};
export default HomeSectionSix;
