import fiturImg from "../Assets/Images/fitur-img.png"
import { StarIcon , CheckIcon} from '@heroicons/react/solid'
export default function Fitur({colorDummy, fiturDummy,url}) {

    return(
        <div className="fitur flex lg:flex-row md:flex-col sm:flex-col" style={{backgroundColor : colorDummy.bgcolor}}>
            <div className="left-side lg:inline md:hidden sm:hidden lg:w-1/2 md:w-full sm:w-full pt-5">
                {url == undefined &&(
                    <img src={fiturImg} alt="Gambar Fitur" />
                )}
                {url !== undefined &&(
                    <img src={url} alt="Gambar Fitur" />
                )}
            </div>

            
            <div className="right-side lg:py-0 md:py-5 sm:py-5 lg:w-1/2 md:w-full sm:w-full flex flex-col my-auto">
                {fiturDummy.map((item, index)=>(
                    <div className="icon-row flex lg:flex-row md:flex-col sm:flex-col mb-7" key={index}>
                        <div className="fitur-icon lg:mx-0 md:mx-auto sm:mx-auto" style={{backgroundColor : colorDummy.colorIcon}}>
                            {item.icon === "Bintang" && (
                                <StarIcon className="h-6 w-6 text-white inline"/>
                            )}
                            {item.icon === "Checklist" && (
                                <CheckIcon className="h-6 w-6 text-white inline" />
                            )}
                        </div>
                        <p className="my-auto lg:ml-5 md:ml-0" style={{color : colorDummy.colorDeskripsi}}>
                            {item.fitur}
                        </p>
                    </div>  
                ))}

            </div>
        </div>
    )
  }