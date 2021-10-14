import fiturImg from "../Assets/Images/fitur-img.png"
import { StarIcon } from '@heroicons/react/solid'
export default function Fitur() {
    const backgroundicon = {
        backgroundColor : '#FF8D50',
      };
    return(
        <div className="fitur flex">
            <div className="left-side w-1/2 pt-5">
                <img src={fiturImg} alt="Gambar Fitur" />
            </div>
            <div className="right-side w-1/2 flex flex-col my-auto">
                <div className="icon-row flex mb-7">
                    <div className="fitur-icon" style={backgroundicon}>
                        <StarIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto ml-5">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

                <div className="icon-row flex mb-7">
                    <div className="fitur-icon" style={backgroundicon}>
                        <StarIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto ml-5">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

                <div className="icon-row flex">
                    <div className="fitur-icon" style={backgroundicon}>
                        <StarIcon className="h-6 w-6 text-white inline"/>
                    </div>
                    <p className="my-auto ml-5">
                        Delivery yang cepat dan bisa diantar kerumah
                    </p>
                </div>

            </div>
        </div>
    )
  }