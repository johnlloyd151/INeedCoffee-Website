import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Contact = () => {
    return ( 
        <>
            <div className="flex flex-col w-full h-full ">  
                <Navbar/>
                <div className="flex justify-center mt-2 h-full">
                    <div className="flex w-3/4 justify-between">
                        <div className="flex flex-col my-14 ml-20 font-mono border p-16 border-neutral-900 rounded bg-neutral-100">
                            <div className="flex">
                                <p className="text-8xl text-neutral-950">Contact Us</p>
                            </div>
                            <div className="flex flex-col mt-20">
                                <input className="text-xl p-3 border rounded-lg border-neutral-900" type="text" placeholder="Full Name" />
                                <input className="text-xl mt-8 p-3 border rounded-lg border-neutral-900" type="text" placeholder="Email" />
                                <textarea className="text-xl mt-8 p-3 border resize-none rounded-lg border-neutral-900" rows="3" type="text" placeholder="Message" />
                                <button className="text-xl cursor-pointer bg-neutral-950 hover:bg-white text-white hover:text-neutral-950 p-2 rounded-md mt-12 mb-2.5">Contact Us</button>
                            </div>
                        </div>

                        <div className="flex flex-col mt-16 mr-20 font-mono">
                            <div>
                                <p className="text-4xl text-neutral-950 ">Contact</p>
                                <p className="text-lg mt-3 text-neutral-950">ineedcoffee@gmail.com</p>
                                <div className="flex flex-row mt-3">
                                    <a className="mr-5" href="https://www.facebook.com/people/I-need-coffee/100085973023194/" target="_blank" rel="noreferrer"><FaFacebookSquare size={50} /> </a>
                                    <a href="https://www.instagram.com/ineedcoffee.ph/" target="_blank" rel="noreferrer"><FaSquareInstagram size={50}/></a>
                                </div>    
                            </div>
                            <div>
                                <p className="text-4xl mt-8 text-neutral-950">Location</p>
                                <a href="https://www.google.com/maps/place/San+Antonio,+Barangay+174,+Caloocan,+Metro+Manila/@14.7609278,121.0482274,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b02680c966f5:0x391b091a885d8101!8m2!3d14.7609278!4d121.0482274!16s%2Fg%2F1tfcwb7h?entry=ttu" target="_blank" rel="noreferrer">
                                <p className="text-lg mt-3 text-neutral-950">San Antonio St. Barangay 174, Caloocan, Philippines</p></a>
                            </div>
                            <div className="border border-neutral-950 rounded mt-3" >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.143790995387!2d121.04822739999997!3d14.760927799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b02680c966f5%3A0x391b091a885d8101!2sSan%20Antonio%2C%20Barangay%20174%2C%20Caloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1703226041019!5m2!1sen!2sph" width="550" height="420" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                                
                            </div>
                        </div>
                    </div>
                </div>   
            </div>     
            <Footer/>  
        </>
    );
}
 
export default Contact;