import { UploadIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import diskonimage from "../../Assets/Images/diskon-img.png";

export default function ModalDiskon({sendDummy, sendImage, mainColor}){
    const [inputDummy, setDiskonDummy] = useState({
        judul : "Gratis Ongkos Kirim !!!",
        deskripsi : "Gratis ongkos kirim setiap pembelian 2 buah roti dengan 1 minuman",
        bgcolor : "#FEF1E6",
        colorJudul : "#FF8D50",
        colorDeskripsi : "black",
    });

    const [urlImage, setUrlImage] = useState(diskonimage);

    function getjudul(e){
        setDiskonDummy({...inputDummy, judul: e.target.value})
    }

    function getdeskripsi(e) {
        setDiskonDummy({...inputDummy, deskripsi : e.target.value})
    }

    function GetColorJudul(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setDiskonDummy({...inputDummy, colorJudul : kodewarna})
        e.target.classList.toggle("button-active")
    
    }

    function GetColorDeskripsi(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setDiskonDummy({...inputDummy, colorDeskripsi : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function GetColorBackground(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setDiskonDummy({...inputDummy, bgcolor : kodewarna})
        e.target.classList.toggle("button-active")
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

    function kirimdata(){
        // sendData(inputdata)
        sendDummy(inputDummy)
        sendImage(urlImage)
    }
    return(
        <div className="modal-diskon flex flex-col">
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className="flex flex-col  lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Judul
                        </label>
                        <input placeholder="Masukkan judul" onChange={getjudul}/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Deskripsi
                        </label>
                        <input placeholder="Masukkan judul" onChange={getdeskripsi}/>
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
                            <img className="mx-auto" id="imgpreviewhero" src="#" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <div>
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Judul
                            </label>
                            <div className="list-warna flex">
                                <button id="color1" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                                </button>
                                <button id="color2" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                                </button>
                                <button id="color3" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorJudul(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorJudul(e)} className="button-color bg-white rounded-2xl ml-3" >   
                                </button>
                                <button id="color4" onClick={(e) => GetColorJudul(e)} className="button-color bg-black rounded-2xl ml-3" >   
                                </button>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Deskripsi
                            </label>
                            <div className="list-warna flex">
                                <button id="color1" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                                </button>
                                <button id="color2" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                                </button>
                                <button id="color3" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorDeskripsi(e)} className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-white rounded-2xl ml-3" >   
                                </button>
                                <button id="color4" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-black rounded-2xl ml-3" >   
                                </button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Background
                            </label>
                            <div className="list-warna flex">
                                <button id="color1" onClick={(e) => GetColorBackground(e)} className="button-color bg-blue-800 rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                                </button>
                                <button id="color2" onClick={(e) => GetColorBackground(e)} className="button-color bg-red-500 rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                                </button>
                                <button id="color3" onClick={(e) => GetColorBackground(e)} className="button-color bg-green-600 rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color bg-pink-700 rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color bg-white rounded-2xl ml-3" >   
                                </button>
                                <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color bg-black rounded-2xl ml-3" >   
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={kirimdata} className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}