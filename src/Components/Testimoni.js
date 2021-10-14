import {Carousel} from '3d-react-carousal';
import testimoniImage from "../Assets/Images/testimoni.png"

export default function Testimoni(){
    let slides = [
        <div className="mx-3">
            <img  src={testimoniImage} alt="1" />
        </div>,
        <img  src={testimoniImage} alt="2" />  ,
        <img  src={testimoniImage} alt="3" />  ,
        <img  src={testimoniImage} alt="4" />  ,
        <img src={testimoniImage} alt="5" />   ];

    return(
        <div className="testimoni flex justify-center flex-col bg-peach-light">
            <p className="testimoni-title" style={{color : "#FF8D50"}}>
                Testimoni
            </p>
            <div className="mt-5">
                <Carousel slides={slides} arrows={false}/>
            </div>
        </div>
    )
}