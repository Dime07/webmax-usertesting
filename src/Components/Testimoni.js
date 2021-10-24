import {Carousel} from '3d-react-carousal';
import testimoniImage from "../Assets/Images/testimoni.png"

export default function Testimoni({color}){
    let slides = [
        <img  src={testimoniImage} alt="1" />,
        <img  src={testimoniImage} alt="2" />  ,
        <img  src={testimoniImage} alt="3" />  ,
        <img  src={testimoniImage} alt="4" />  ,
        <img src={testimoniImage} alt="5" />   ];

    return(
        <div className="testimoni flex justify-center flex-col " style={{backgroundColor : color.bgcolor}}>
            <p className="testimoni-title" style={{color : color.colorJudul}}>
                Testimoni
            </p>
            <div className="mt-5">
                <Carousel slides={slides} arrows={false}/>
            </div>
        </div>
    )
}