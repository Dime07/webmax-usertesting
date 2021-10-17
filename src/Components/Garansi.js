import garansiimg from "../Assets/Images/garansi-img.png"
import { CheckCircleIcon } from '@heroicons/react/solid'

export default function Garansi() {
    const backgroundicon = {
        backgroundColor : '#FF8D50',
    };
    return(
        <div className="garansi flex lg:flex-row md:flex-col sm:flex-col">
            <div className="left-side lg:w-1/2 md:w-full sm:hidden pt-5 flex justify-center ">
                <img className="m-0" src={garansiimg} alt="Gambar Garansi" />
            </div>
            <div className="right-side lg:w-1/2 md:w-full sm:w-full flex flex-col my-auto">
                <p className="garansi-title lg:text-left md:text-center sm:text-center mt-2" style={{color: '#FF8D50'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="icon-row flex lg:flex-row md:flex-col sm:flex-col mb-7">
                    <div className="garansi-icon lg:mx-0 md:mx-auto sm:mx-auto" style={backgroundicon}>
                        <CheckCircleIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto lg:ml-5 md:ml-0 sm:ml-0">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

                <div className="icon-row flex lg:flex-row md:flex-col sm:flex-col mb-7">
                    <div className="garansi-icon lg:mx-0 md:mx-auto sm:mx-auto" style={backgroundicon}>
                        <CheckCircleIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto lg:ml-5 md:ml-0 sm:ml-0">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

                <div className="icon-row flex lg:flex-row md:flex-col sm:flex-col mb-7">
                    <div className="garansi-icon lg:mx-0 md:mx-auto sm:mx-auto" style={backgroundicon}>
                        <CheckCircleIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto lg:ml-5 md:ml-0 sm:ml-0">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

            </div>
        </div>
    )
  }