import ctaImg from "../Assets/Images/CTA-img.png"
import Button from "./Button"

export default function CTA({CTADummy, url}) {
    return(
        <div className="cta flex justify-center" style={{backgroundColor : CTADummy.bgcolor}}>
            <div className="flex lg:flex-row md:flex-col sm:flex-col justify-center">
                <div className="lg:w-1/2 md:w-full sm:w-full flex justify-center mr-3">
                    {url == undefined &&(
                        <img src={ctaImg} alt="gambar cta" />
                    )}
                    {url !== undefined &&(
                        <img src={url} alt="gambar cta" />
                    )}     
                </div>
                <div className="flex flex-col text-left my-auto lg:w-1/2 md:w-full sm:w-full">
                    <p className="cta-title lg:text-left md:text-center sm:text-center lg:mt-0 md:mt-0 sm:mt-4" style={{color : CTADummy.colorJudul}}> 
                        {CTADummy.judul}
                    </p>
                    <div className="btn-cta-wrap inline mt-2 lg:mx-0 md:mx-auto sm:mx-auto">
                        <Button ButtonName="Order Sekarang" Background={CTADummy.colorTombol}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }