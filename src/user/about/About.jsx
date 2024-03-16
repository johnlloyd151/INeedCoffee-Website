import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Owner from "../../img/owner.png"
import Inc from "../../img/incbg1.png"
import Customer from "../../img/customer.png"
import Nice from "../../img/nice.png"

const About = () => {
    return ( 
        <>
            

            <div className="flex flex-col w-full h-full">
                <Navbar />
                <div className="flex justify-center ">
                    <div className="flex w-3/4 flex-col font-mono items-center">
                        <div className="p-10 flex items-center w-fit">
                            <p className="text-5xl">About I Need Coffee</p>
                        </div>

                        <div className="p-8 flex flex-row border-b-2">
                            <div className="w-3/4 ">
                                <img className=" rounded" src={Owner} />
                            </div>
                            <div className="flex flex-col ml-10 justify-center w-3/4">
                                <p className="text-2xl italic">A Cup of Passion Brewed by Three Friends</p>
                                <p className="text-lg mt-10">In the bustling heart of Caloocan, Metro Manila, where the aroma of fresh 
                                bread and sizzling street food mingles with the city's vibrant energy, lies a haven for coffee enthusiasts and friends alike: I Need Coffee.
                                Born from the shared passion and caffeine dependence of three friends, Nicko, Lyndon, and Romeo, I Need Coffee is more than just a place to 
                                grab a latte. It's a testament to the power of friendship, collaboration, and, of course, a good cup of joe.</p>
                            </div>
                        </div>

                        <div className="p-8 flex flex-row border-b-2">
                            <div className="flex flex-col mr-10 justify-center w-3/4">
                                <p className="text-2xl italic">Our Story: Beans, Brews, and Brotherhood</p>
                                <p className="text-lg mt-10">Nicko, a skilled barista with an artistic flair for latte art, Lyndon, a coffee connoisseur with a nose for the finest
                                beans, and Romeo, the life of the party who can turn any conversation into a side-splitting riot, met at a local coffee shop. Over countless 
                                cups of espresso and shared dreams, they realized their love for coffee went beyond mere consumption. They craved to create a space where coffee
                                wasn't just a drink, but an experience – a place where people could connect, unwind, and savor the simple pleasure of a perfectly brewed cup.
                                And so, I Need Coffee was born.</p>
                            </div>
                            <div className="w-3/4">   
                                <img className=" rounded" src={Customer} />
                            </div>
                        </div>

                        <div className="p-8 flex flex-row border-b-2">
                            <div className="w-3/4">
                                <img className="rounded" src={Inc} />
                            </div>
                            <div className="flex flex-col ml-10 justify-center w-3/4">
                                <p className="text-2xl italic">From Dream to Reality</p>
                                <p className="text-lg mt-10">Transforming their dream into reality wasn't easy. Long nights of planning, meticulous bean sourcing, and countless recipe
                                trials were fueled by countless cups of their own creation. But through it all, their unwavering friendship and shared passion kept them going.
                                Today, I Need Coffee is a warm, inviting space where the aroma of freshly roasted beans hangs in the air, inviting you to step in and stay a while.
                                The exposed brick walls and cozy furniture create a welcoming atmosphere, while the baristas, led by Nicko's artistic touch, create coffee 
                                masterpieces that are as pleasing to the eye as they are to the palate.</p>
                            </div>
                            
                        </div>
                        <div className="p-8 flex flex-row">
                            <div className="flex flex-col mr-10 justify-center w-3/4">
                                <p className="text-2xl italic">More Than Just Coffee</p>
                                <p className="text-lg mt-10">Craving that perfect cup? At I Need Coffee, it's not just a drink, it's a vibe. Ethically sourced beans, fresh pastries, 
                                warm smiles, the perfect spot for your morning ritual, a friendly catch-up, or a stolen moment with a good book. We brew smiles, one cup at a time. 
                                Come say hello, let's chat, let's brew something special.</p>
                            </div>
                           
                            <div className="w-3/4 ">   
                                <img className=" rounded" src={Nice} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
 
export default About;