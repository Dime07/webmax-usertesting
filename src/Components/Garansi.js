import garansiimg from "../Assets/Images/garansi-img.png"
import { CheckCircleIcon } from '@heroicons/react/solid'

export default function Garansi() {
    const backgroundicon = {
        backgroundColor : '#FF8D50',
    };
    return(
        <div className="garansi flex">
            <div className="left-side w-1/2 pt-5 flex justify-center ">
                <img className="m-0" src={garansiimg} alt="Gambar Garansi" />
            </div>
            <div className="right-side w-1/2 flex flex-col my-auto">
                <p className="garansi-title mt-2" style={{color: '#FF8D50'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="icon-row flex mb-7">
                    <div className="garansi-icon" style={backgroundicon}>
                        <CheckCircleIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto ml-5">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

                <div className="icon-row flex mb-7">
                    <div className="garansi-icon" style={backgroundicon}>
                        <CheckCircleIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto ml-5">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

                <div className="icon-row flex">
                    <div className="garansi-icon" style={backgroundicon}>
                        <CheckCircleIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto ml-5">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

            </div>
        </div>
    )
  }