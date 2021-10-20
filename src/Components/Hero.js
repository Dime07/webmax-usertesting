import Button from "./Button"
import heroImg from "../Assets/Images/hero-img.png"



export default function Hero({headercolor, konten, dataDummy}) {

    console.log(dataDummy)
    return(
        <div className="hero flex justify-between lg:flex-row  md:flex-col sm:flex-col " style={{backgroundColor : dataDummy.bgcolor}}>
            <div className="left-side my-auto lg:py-0 md:py-5 sm:py-5 lg:w-1/2  md:w-full sm:w-full sm:text-center lg:text-left">
                <p className="hero-title" style={{color : dataDummy.colorJudul}} >
                    {dataDummy.judul}
                    {konten.heading_content}
                </p>
                <p className=" mb-6" style={{color : dataDummy.colorDeskripsi}}>
                    {dataDummy.deskripsi}
                </p>
                <Button ButtonName={dataDummy.tombol} Background={dataDummy.colorTombol}/>
            </div>
            <div className="right-side lg:w-1/2 md:w-full text-right sm:w-full">
                <img className="mx-auto w-3/5 lg:inline md:hidden sm:hidden" src={heroImg} alt="gambar hero"/>
            </div>
        </div>
    )
 }