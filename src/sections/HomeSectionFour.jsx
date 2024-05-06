import { SectionFourImg } from "../assets/images"




const HomeSectionFour = () => {
  return (
    <section className="home-section--four mt-12">
        <div className="px-28 py-0 flex justify-between items-center container mx-auto space-x-24">

            <div className="w-5/2 home-section-four--left relative">
                <div className="anim-wrap">
                    <SectionFourImg />
                </div>
            </div>



            <div className="w-4/8 home-section-four--right">
                <div className="max-w-lg space-y-8">
                    <h2>It’s your money, we just help you manage it.</h2>
                    <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
                </div>
            </div>

        </div>
    </section>
  );
};
export default HomeSectionFour;
