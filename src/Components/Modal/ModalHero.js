import { useState} from "react";
import { UploadIcon } from '@heroicons/react/outline'
import heroImg from "../../Assets/Images/hero-img.png"
import notUploaded from "../../Assets/Images/notUploaded.png"


export default function ModalHero({sendColor,sendData, sendDummy, mainColor, sendImage, sendBg}) {
    const [warna, setWarna] = useState("");
    const [inputdata, setInputdata] = useState();
    const [inputDummy, setHeroDummy] = useState({
        judul : "Roti panggang, untuk kebutuhan kamu setiap hari",
        deskripsi : "Kami menyediakan berbagai macam roti yang siap kamu bawa pulang",
        bgcolor : "#FEF1E6",
        colorJudul : "#FF8D50",
        colorDeskripsi : "#FF8D50",
        colorTombol : "#FF8D50",
        tombol : "Jelajahi Sekarang"
    });
    const [urlImage, setUrlImage] = useState(heroImg);
    const [urlbg, setUrlBg] = useState();


    //----- get api -----
    function getisi(e) {
        setInputdata({...inputdata, heading_content: e.target.value});
    }

    //-----input dummy data----
    function getjudul(e){
        setHeroDummy({...inputDummy, judul: e.target.value})
    }

    function getdeskripsi(e) {
        setHeroDummy({...inputDummy, deskripsi : e.target.value})
    }

    function gettombol(e) {
        setHeroDummy({...inputDummy, tombol : e.target.value})
    }



    

    function GetColorJudul(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setHeroDummy({...inputDummy, colorJudul : kodewarna})
        e.target.classList.toggle("button-active")
    
    }

    function GetColorDeskripsi(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setHeroDummy({...inputDummy, colorDeskripsi : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function GetColorTombol(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setHeroDummy({...inputDummy, colorTombol : kodewarna})
        e.target.classList.toggle("button-active") 
    }

    function GetColorBackground(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setHeroDummy({...inputDummy, bgcolor : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function kirimdata(){
        // sendData(inputdata)
        sendDummy(inputDummy)
        sendImage(urlImage)
        sendBg(urlbg)
    }

    function previewimg(){
        let imgHero = document.getElementById("imgHero");
        let imgpreviewhero = document.getElementById("imgpreviewhero");
        const [file] = imgHero.files
        if (file){
            setUrlImage(URL.createObjectURL(file))
            imgpreviewhero.src = URL.createObjectURL(file)
        }
    }

    function previewbg(){
        let imgbg = document.getElementById("imgbg");
        let imgpreviewbg = document.getElementById("imgpreviewbg");
        const [file] = imgbg.files
        if (file){
            setUrlBg(URL.createObjectURL(file))
            imgpreviewbg.src = URL.createObjectURL(file)
        }
    }

    function emptyImage(e){
        e.target.src = notUploaded
    }

    return(
        <div className="modal-hero flex flex-col">
            <div className="flex modal-hero-wrap lg:flex-row md:flex-col sm:flex-col modal-hero-wrap">
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Judul
                        </label>
                        <input placeholder="Masukkan Judul" onChange={getjudul} />
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Deskripsi
                        </label>
                        <input placeholder="Masukkan Deskripsi" onChange={getdeskripsi} />
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Tombol
                        </label>
                        <input placeholder="Masukkan Tombol" onChange={gettombol}/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6 w-full">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Gambar 
                        </label>
                        <input onChange={previewimg} id="imgHero" accept="image/*" type="file"  hidden/>
                        <label className="upload-label flex justify-center" for="imgHero">
                            Upload 
                            <UploadIcon className="ml-2 h-5 w-5 text-white"/>
                        </label>
                        <div className="preview flex">
                            <img className="mx-auto" id="imgpreviewhero" src="#" alt="" onError={emptyImage}/>                
                        </div>
                    </div>

                    <div className="flex flex-col mb-3 mr-6 w-full">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Background Gambar 
                        </label>
                        <input onChange={previewbg} id="imgbg" accept="image/*" type="file"  hidden/>
                        <label className="upload-label flex justify-center" for="imgbg">
                             Upload 
                            <UploadIcon className="ml-2 h-5 w-5 text-white"/>
                        </label>
                        <div className="preview flex">
                            <img className="mx-auto" id="imgpreviewbg" src="#" alt="" onError={emptyImage}/>                
                        </div>
                    </div>
                    
                </div>
                {/* bagian deskrips */}
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full ">
                    <div>
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Judul
                        </label>
                        <div className="list-warna flex ">
                            <button id="color1" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl " style={{backgroundColor : mainColor.warna1}}>   
                            </button>
                            <button id="color2" onClick={(e) => GetColorJudul(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                            </button>
                            <button id="color3" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                            </button>
                            <button id="color4" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
                            </button>
                            <button id="color5" onClick={(e) => GetColorJudul(e)} className="button-color bg-white rounded-2xl ml-3" >   
                            </button>
                            <button id="color6" onClick={(e) => GetColorJudul(e)} className="button-color bg-black rounded-2xl ml-3" >   
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Deskripsi
                        </label>
                        <div className="list-warna  flex">
                            <button id="color1" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl" style={{backgroundColor: mainColor.warna1}}>   
                            </button>
                            <button id="color2" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna2}}>   
                            </button>
                            <button id="color3" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna3}}>   
                            </button>
                            <button id="color4" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna4}}>   
                            </button>
                            <button id="color5" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-white rounded-2xl ml-3" >   
                            </button>
                            <button id="color6" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-black rounded-2xl ml-3" >   
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Tombol
                        </label>
                        <div className="list-warna flex">
                            <button id="color1" onClick={(e) => GetColorTombol(e)} className="button-color  rounded-2xl" style={{backgroundColor: mainColor.warna1}}>   
                            </button>
                            <button id="color2" onClick={(e) => GetColorTombol(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna2}}>   
                            </button>
                            <button id="color3" onClick={(e) => GetColorTombol(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna3}}>   
                            </button>
                            <button id="color4" onClick={(e) => GetColorTombol(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna4}}>   
                            </button>
                            <button id="color5" onClick={(e) => GetColorTombol(e)} className="button-color bg-white rounded-2xl ml-3" >   
                            </button>
                            <button id="color6" onClick={(e) => GetColorTombol(e)} className="button-color bg-black rounded-2xl ml-3" >   
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Background
                        </label>
                        <div className="list-warna flex">
                            <button id="color1" onClick={(e) => GetColorBackground(e)} className="button-color  rounded-2xl" style={{backgroundColor: mainColor.warna1}}>   
                            </button>
                            <button id="color2" onClick={(e) => GetColorBackground(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna2}}>   
                            </button>
                            <button id="color3" onClick={(e) => GetColorBackground(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna3}}>   
                            </button>
                            <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor: mainColor.warna4}}>   
                            </button>
                            <button id="color5" onClick={(e) => GetColorBackground(e)} className="button-color bg-white rounded-2xl ml-3" >   
                            </button>
                            <button id="color6" onClick={(e) => GetColorBackground(e)} className="button-color bg-black rounded-2xl ml-3" >   
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={kirimdata} className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}