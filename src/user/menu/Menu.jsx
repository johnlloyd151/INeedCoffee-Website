import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HotCoffee from "../../img/hotcoffee1.png"
import ColdCoffee from "../../img/coldcoffee1.png"
import HotNonCoffee from "../../img/hot-noncoffee1.png"
import ColdNonCoffee from "../../img/cold-noncoffee1.png"
import Waffles from "../../img/waffles.png"
import Cookies from "../../img/cookies.png"
import Pasta from "../../img/pasta.png"
import WholeBeans from "../../img/wholebeans.png"
import GroundBeans from "../../img/groundbeans.png"
import ColdCups from "../../img/coldcups.png"
import Tumblers from "../../img/tumbler.png"
import Mugs from "../../img/mug.png"
import Pourover from "../../img/pourover.png"

const Menu = () => {
    return ( 
        <>
            <Navbar />
            <div className="w-full h-full flex justify-center ">
                <div className="w-3/4 flex my-10">
                    <div className="flex flex-col font-mono mx-20 w-1/5">
                        <p className="text-2xl font-bold mb-5">Drinks</p>
                        <ul className="flex flex-col gap-y-3 mb-10">
                            <li className="cursor-pointer">Hot Coffee</li>
                            <li className="cursor-pointer">Iced Coffee</li>
                            <li className="cursor-pointer">Hot Non-Coffee</li>
                            <li className="cursor-pointer">Iced Non-Coffee</li>
                        </ul>

                        <p className="text-2xl font-bold mb-5">Foods</p>
                        <ul className="flex flex-col gap-y-3 mb-10">
                            <li className="cursor-pointer">Waffles</li>
                            <li className="cursor-pointer">Cookies</li>
                            <li className="cursor-pointer">Pasta</li>
                        </ul>

                        <p className="text-2xl font-bold mb-5">Coffee Beans</p>
                        <ul className="flex flex-col gap-y-3 mb-10">
                            <li className="cursor-pointer">Whole Beans</li>
                            <li className="cursor-pointer">Ground Beans</li>
                        </ul>

                        
                        <p className="text-2xl font-bold mb-5">Merchandise</p>
                        <ul className="flex flex-col gap-y-3">
                            <li className="cursor-pointer">Cold Cups</li>
                            <li className="cursor-pointer">Tumblers</li>
                            <li className="cursor-pointer">Mugs</li>
                            <li className="cursor-pointer">Others</li>
                        </ul>
                    </div>

                    <div className="flex flex-col w-4/5">
                        <div className="flex">
                            <p className="text-4xl font-bold font-mono">Menu</p>
                        </div>
                        
                    {/* Drinks */}

                        <div className="flex mt-16 mb-8 border-b-2 pb-3">
                            <p className="text-3xl font-bold font-mono ">Drinks</p>
                        </div>   

                        <div className="grid grid-cols-2 ">
                            
                            <div className="card ">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={HotCoffee} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Hot Coffee</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={ColdCoffee} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Iced Coffee</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-center cursor-pointer">
                                    <img src={HotNonCoffee} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Hot Non-Coffee</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-center cursor-pointer">
                                    <img src={ColdNonCoffee} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Iced Non-Coffee</p>
                                </div>
                            </div>
                        </div>

                    {/* Foods */}

                        <div className="flex mt-16 mb-8 border-b-2 pb-3">
                            <p className="text-3xl font-bold font-mono ">Foods</p>
                        </div>   
                        
                        <div className="grid grid-cols-2 ">
                            <div className="card ">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={Waffles} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Waffles</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={Cookies} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Cookies</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-center cursor-pointer">
                                    <img src={Pasta} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Pasta</p>
                                </div>
                            </div>
                        </div>

                    {/* Coffee Beans */}

                        <div className="flex mt-16 mb-8 border-b-2 pb-3">
                            <p className="text-3xl font-bold font-mono ">Coffee Beans</p>
                        </div>   
                        
                        <div className="grid grid-cols-2 ">
                            <div className="card ">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={WholeBeans} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Whole Beans</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={GroundBeans} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Ground Beans</p>
                                </div>
                            </div>
                        </div>

                    {/* Merchandise */}
                        <div className="flex mt-16 mb-8 border-b-2 pb-3">
                            <p className="text-3xl font-bold font-mono ">Merchandise</p>
                        </div>   
                        
                        <div className="grid grid-cols-2 ">
                            <div className="card ">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={ColdCups} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Cold Cups</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex my-10 items-center cursor-pointer">
                                    <img src={Tumblers} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Tumblers</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-center cursor-pointer">
                                    <img src={Mugs} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Mugs</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-center cursor-pointer">
                                    <img src={Pourover} className="border-4 border-neutral-700 bg-slate-100 rounded-full h-40"/>
                                    <p className="ml-5 font-mono text-xl">Others</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
 
export default Menu;