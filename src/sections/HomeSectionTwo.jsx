import { CardOneIcon, CardTwoIcon, CardThreeIcon, CardFourIcon, CardFiveIcon } from "../assets/icons";



const HomeSectionTwo = () => {
  return (
    <section className="home-section--two">
        <div className="px-28 py-0 container mx-auto">
            
            <div className="flex flex-row justify-between mb-10">
                <div className="bg-white shadow-md border-2 border-slate-100 rounded-lg w-3/3 min-h-44 flex flex-col py-7 px-10 mb-5">
                    <div className="mb-4"><CardOneIcon /></div>
                    <p className="text-lg font-black text-skin-purpleColor">Order a Kuda Visa card on the app with pickup and delivery options.</p>
                </div>
                <div className="bg-white shadow-md border-2 border-slate-100  rounded-lg w-3/3 min-h-44 flex flex-col py-7 px-10 mb-5">
                    <div className="mb-4"><CardTwoIcon /></div>
                    <p className="text-lg font-black text-skin-purpleColor">Enjoy cashless payment options online and offline.</p>
                </div>
                <div className="bg-white shadow-md border-2 border-slate-100 rounded-lg w-3/3 min-h-44 flex flex-col py-7 px-10 mb-5">
                    <div className="mb-4"><CardThreeIcon /></div>
                    <p className="text-lg font-black text-skin-purpleColor">Pay your essential bills and buy gift cards easily.</p>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="bg-white shadow-md border-2 border-slate-100 rounded-lg w-3/3 min-h-44 flex flex-col py-7 px-10 mr-7 mb-5">
                    <div className="mb-4"><CardFourIcon /></div>
                    <p className="text-lg font-black text-skin-purpleColor">Get 25 free transfers to Nigerian banks every month.</p> 
                </div>
                <div className="bg-white shadow-md border-2 border-slate-100  rounded-lg w-3/3 min-h-44 flex flex-col py-7 px-10 mb-5">
                    <div className="mb-4"><CardFiveIcon /></div>
                    <p className="text-lg font-black text-skin-purpleColor">Save money automatically any time you spend.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSectionTwo
