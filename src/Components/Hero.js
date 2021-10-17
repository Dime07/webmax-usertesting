import Button from "./Button"
import heroImg from "../Assets/Images/hero-img.png"



export default function Hero({headercolor, konten}) {

    return(
        <div className="hero flex bg-peach-light justify-between lg:flex-row  md:flex-col sm:flex-col ">
            <div className="left-side my-auto lg:w-1/2  md:w-full sm:w-full sm:text-center lg:text-left">
                <p className="hero-title" style={{color : headercolor}} >
                    Roti panggang, untuk kebutuhan kamu setiap hari
                    {konten.heading_content}
                </p>
                <p className=" mb-6" style={{color: headercolor}}>
                    Kami menyediakan berbagai macam roti yang siap kamu bawa pulang
                </p>
                <Button ButtonName="Jelajahi Sekarang"/>
            </div>
            <div className="right-side lg:w-1/2 md:w-full text-right sm:w-full">
                <img className="mx-auto w-3/5 lg:inline md:hidden sm:hidden" src={heroImg} alt="gambar hero"/>
            </div>
        </div>
    )
 }