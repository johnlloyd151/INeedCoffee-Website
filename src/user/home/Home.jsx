import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Commercial from "../../img/CommercialBg1.mp4"
import Logo from "../../img/logo.png"

const Home  = () => {

    const navigate = useNavigate()

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
            <div>
                <video autoPlay loop muted className="absolute w-full h-full object-cover ">
                    <source src={Commercial} type="video/mp4" />
                </video>

                <div className="relative flex justify-center flex-col">
                    <div className="flex flex-col items-center mt-24">
                        <div className="flex mt">
                            <img src={Logo} className="invert w-60 h-60"/>
                        </div>
                        <div className="flex items-center flex-col mt-16 pl-14">
                            <p className="text-stone-100 text-8xl font-mono">I need coffee.</p>
                            <p className="text-stone-300 text-2xl font-mono italic mt-5">Affordable, High Quality Coffee.</p>
                        </div>
                        <div className="flex mt-20">
                            <ul className="flex text-white text-3xl font-mono gap-10 ">
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickMenu}>Menu</li>
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickContact}>Contact Us</li>
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickAbout}>About Us</li>
                                <li className="cursor-pointer hover:text-stone-300" onClick={clickOrder}>Order Now</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
 
export default Home ;