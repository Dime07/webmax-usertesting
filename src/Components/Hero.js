import Button from "./Button"
import heroImg from "../Assets/Images/hero-img.png"
import axios from "axios";


export default function Hero({headercolor, konten}) {
    console.log(konten.heading_content);
    



    return(
        <div className="hero flex bg-peach-light justify-between">
            <div className="left-side text-left w-1/2 my-auto">
                <p className="hero-title" style={{color : headercolor}} >
                    {/* Roti panggang, untuk kebutuhan kamu setiap hari */}
                    {konten.heading_content}
                </p>
                <p className="text-peach-default mb-6">
                    Kami menyediakan berbagai macam roti yang siap kamu bawa pulang
                </p>
                <Button ButtonName="Jelajahi Sekarang"/>
            </div>
            <div className="right-side w-1/2 text-right ">
                <img className="mx-auto w-3/5" src={heroImg} alt="gambar hero"/>
            </div>
        </div>
    )
 }