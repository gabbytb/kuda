import { customer1, customer3, customer4, customer5, } from "../assets/images";




const HomeSectionNine = () => {

    const customNoImage = document.getElementsByClassName("customer_info p").innerHTML;
    console.log("Customer Reviews w/out Image Icon: ", customNoImage);

    return (
        <section className="home-section--eight mt-12">
            <div className="p-0 container mx-0">
                <h2>Don’t just take our word for it</h2>

                <div className="flex flex-row w-screen">
                    <div className="flex flex-col justify-between w-3/3 min-h-52">
                        <p>
                            <span>Well done to the guys at <span class="text-bold">@kudabank</span> had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</span>
                        </p>
                        <div className="customer_info">
                            <img src={customer1} alt="Mu'azu Muhammad Kudu" />
                            <p>Mu'azu Muhammad Kudu</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-3/3 min-h-52">
                        <p>
                            <span>Just joined the best Digital Bank in Nigeria</span><br /><span>I have no complaints whatsoever since i started using Kuda</span>
                        </p>
                        <div className="customer_info">
                            <div className="no_customer_image">T</div>
                            <p>Tomisinv</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-3/3 min-h-52">
                        <p>
                            <span>Never thought an app would stylish become my everyday way to bank and have access to physical cash. <span class="text-bold">@kudabank</span> is sleek</span>
                        </p>
                        <div className="customer_info">
                            <img src={customer3} alt="Babajide Duroshola" />
                            <p>Babajide Duroshola</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-3/3 min-h-52">
                        <p><span>This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!</span></p>
                        <div className="customer_info">
                            <img src={customer4} alt="RealSOK" />
                            <p>@RealSOK_</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-3/3 min-h-52">
                        <p><span>I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!</span></p>
                        <div className="customer_info">
                            <img src={customer5} alt="Adebambo Oyekan" />
                            <p>Adebambo Oyekan</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-3/3 min-h-52">
                        <p><span>I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card.</span></p>
                        <div className="customer_info">
                            <div className="no_customer_image">I</div>
                            <p>Ifeanyichukwu Obaji</p>
                        </div>
                    </div>


                    {/* <div className="flex flex-col w-3/3 min-h-min">
                        <p><span>Well done to the guys at <span class="text-bold">@kudabank</span> had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</span></p>
                        <div>
                            <img src={customer1} alt="Mu'azu Muhammad Kudu" />
                            <p>Mu'azu Muhammad Kudu</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-3/3 min-h-min">
                        <p><span>Well done to the guys at <span class="text-bold">@kudabank</span> had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</span></p>
                        <div>
                            <img src={customer1} alt="Mu'azu Muhammad Kudu" />
                            <p>Mu'azu Muhammad Kudu</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HomeSectionNine;
