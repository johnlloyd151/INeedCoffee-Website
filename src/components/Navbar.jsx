import Logo from "../../src/img/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    const clickHome = () => {
        navigate("/")
    }

    const clickMenu = () => {
        navigate("/menu")
    }

    const clickContact = () => {
        navigate("/contact")
    }

    const clickAbout = () => {
        navigate("/about")
    }

    const clickOrder = () => {
        navigate("/order")
    }

    return ( 
        <>
            <div className="flex justify-center w-full h-24 border-b-2">
                <div className=" flex justify-center items-center w-3/4 h-24">
                    <div className="flex items-center justify-between w-full h-20">
                        <div className="flex ml-4 items-center w-fit h-fit cursor-pointer" onClick={clickHome}>
                            <img src={Logo} className="w-14 h-14"/>
                            <p className="mx-3 text-lg font-mono font-bold">I need coffee.</p>
                        </div>
                        <div className="flex justify-center mr-4">
                            <ul className="flex items-center gap-7 font-mono text-xl">
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickHome}>Home</li>
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickMenu}>Menu</li>
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickContact}>Contact Us</li>
                                <li className="cursor-pointer mr-6 hover:text-stone-300" onClick={clickAbout}>About Us</li>
                            </ul>
                            <p className="font-mono text-xl cursor-pointer bg-neutral-950 hover:bg-white text-white hover:text-neutral-950 p-2 rounded ml-5" onClick={clickOrder}>Order Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;
