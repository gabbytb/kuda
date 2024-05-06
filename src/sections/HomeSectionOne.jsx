import { AppStore, PlayStore } from "../assets/icons";
import { SectionOneImgBg, SectionOneImg } from "../assets/images";






const HomeSectionOne = () => {

    return (
        <section className="home-section--one">
            <div className="mt-20 px-28 py-14 container mx-auto">
                <div className="w-full flex justify-between items-center">

                    {/****** Left Pane ******/}
                    <div className="home-section-one--left">
                        <div className="max-w-lg space-y-8">
                            <h1>The money app for Africans.</h1>
                            <h4>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</h4>
                            <div className="inline-flex social--links">
                                <AppStore />
                                <PlayStore />
                            </div>
                        </div>
                    </div>
                    {/****** Left Pane ******/}





                    {/****** Right Pane ******/}
                    <div className="home-section-one--right relative">
                        <div>
                            <SectionOneImgBg />
                        </div>
                        <div className="absolute inset-0">
                            <div className="m-12">
                                <SectionOneImg />
                            </div>
                        </div>
                    </div>
                    {/****** Right Pane ******/}

                </div>
            </div>
        </section>
    );
};

export default HomeSectionOne;
