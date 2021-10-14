import { useState } from "react";
import { UploadIcon } from '@heroicons/react/outline'


export default function ModalHero({sendColor,sendData}) {
    const [warna, setWarna] = useState("");
    const [inputdata, setInputdata] = useState();


    //----- get api -----
    function getisi(e) {
        setInputdata({...inputdata, heading_content: e.target.value});
    }

    

    function GetColor(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setWarna(kodewarna) 
    }

    function kirimdata(){
        sendColor(warna)
        sendData(inputdata)
    }

    function previewimg(){
        let imgHero = document.getElementById("imgHero");
        let imgpreviewhero = document.getElementById("imgpreviewhero");
        const [file] = imgHero.files
        if (file){
            imgpreviewhero.src = URL.createObjectURL(file)
        }
    }

    return(
        <div className="modal-hero flex flex-col">
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Judul
                        </label>
                        <input placeholder="Masukkan judul" onChange={getisi}/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Deskripsi
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Tombol
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6 w-full">
                        <label className="text-white">
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
                {/* bagian deskrips */}
                <div className="flex flex-col w-1/2">
                    <div>
                        <label className="text-white">
                            Warna Judul
                        </label>
                        <div className="list-warna flex">
                            <div id="color1" onClick={(e) => GetColor(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </div>
                            <div id="color2" onClick={(e) => GetColor(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </div>
                            <div id="color3" onClick={(e) => GetColor(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </div>
                            <div id="color4" onClick={(e) => GetColor(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="text-white">
                            Warna Deskripsi
                        </label>
                        <div className="list-warna flex">
                            <div id="color1" onClick={(e) => GetColor(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </div>
                            <div id="color2" onClick={(e) => GetColor(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </div>
                            <div id="color3" onClick={(e) => GetColor(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </div>
                            <div id="color4" onClick={(e) => GetColor(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white">
                            Warna Tombol
                        </label>
                        <div className="list-warna flex">
                            <div id="color1" onClick={(e) => GetColor(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </div>
                            <div id="color2" onClick={(e) => GetColor(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </div>
                            <div id="color3" onClick={(e) => GetColor(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </div>
                            <div id="color4" onClick={(e) => GetColor(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white">
                            Warna Background
                        </label>
                        <div className="list-warna flex">
                            <div id="color1" onClick={(e) => GetColor(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </div>
                            <div id="color2" onClick={(e) => GetColor(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </div>
                            <div id="color3" onClick={(e) => GetColor(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </div>
                            <div id="color4" onClick={(e) => GetColor(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={kirimdata} className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}