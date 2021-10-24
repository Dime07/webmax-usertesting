import garansiimg from "../Assets/Images/garansi-img.png"
import { CheckCircleIcon, StarIcon, CheckIcon } from '@heroicons/react/solid'

export default function Garansi({colorDummy, fiturDummy, url}) {
    return(
        <div className="garansi flex lg:flex-row md:flex-col sm:flex-col lg:py-0 md:py-5 sm:py-5" style={{backgroundColor : colorDummy.bgcolor}}>
            <div className="left-side lg:w-1/2 md:w-full sm:w-full lg:inline sm:hidden pt-5 flex justify-center ">
                {url == undefined &&(
                     <img className="mx-0" src={garansiimg} alt="Gambar Garansi" />
                )}
                {url !== undefined &&(
                     <img className="mx-0" src={url} alt="Gambar Garansi" />
                )}
            </div>
            <div className="right-side lg:w-1/2 md:w-full sm:w-full flex flex-col my-auto">
                <p className="garansi-title lg:text-left md:text-center sm:text-center mt-2" style={{color: colorDummy.colorJudul}}>
                    {colorDummy.judul}
                </p>

                {fiturDummy.map((item, index)=>(
                    <div className="icon-row flex lg:flex-row md:flex-col sm:flex-col mb-7" key={index}>
                        <div className="garansi-icon lg:mx-0 md:mx-auto sm:mx-auto" style={{backgroundColor : colorDummy.colorIcon}}>
                            {item.icon === "Bintang" && (
                                <StarIcon className="h-6 w-6 text-white inline"/>
                            )}
                            {item.icon === "Checklist" && (
                                <CheckIcon className="h-6 w-6 text-white inline" />
                            )}
                            {item.icon === "Circle Checklist" && (
                                <CheckCircleIcon className="h-6 w-6 text-white inline" />
                            )}

                        </div>
                        <p className="my-auto lg:ml-5 md:ml-0 sm:ml-0">
                            {item.garansi}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
  }