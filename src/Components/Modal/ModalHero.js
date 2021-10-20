import { useState} from "react";
import { UploadIcon } from '@heroicons/react/outline'


export default function ModalHero({sendColor,sendData, sendDummy}) {
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
        setHeroDummy({...inputDummy, deskripsi : e.target.value})
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
        sendColor(warna)
        // sendData(inputdata)
        sendDummy(inputDummy)
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
            <div className="flex modal-hero-wrap lg:flex-row md:flex-col sm:flex-col modal-hero-wrap">
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Judul
                        </label>
                        <input placeholder="Masukkan Teks" onChange={getjudul}/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Deskripsi
                        </label>
                        <input placeholder="Masukkan Deskripsi" onChange={getdeskripsi}/>
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
                            <img className="mx-auto" id="imgpreviewhero" src="#" alt=""/>
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
                            <button id="color1" onClick={(e) => GetColorJudul(e)} className="button-color bg-blue-800 rounded-2xl ">   
                            </button>
                            <button id="color2" onClick={(e) => GetColorJudul(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </button>
                            <button id="color3" onClick={(e) => GetColorJudul(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </button>
                            <button id="color4" onClick={(e) => GetColorJudul(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Deskripsi
                        </label>
                        <div className="list-warna  flex">
                            <button id="color1" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </button>
                            <button id="color2" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </button>
                            <button id="color3" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </button>
                            <button id="color4" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Tombol
                        </label>
                        <div className="list-warna flex">
                            <button id="color1" onClick={(e) => GetColorTombol(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </button>
                            <button id="color2" onClick={(e) => GetColorTombol(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </button>
                            <button id="color3" onClick={(e) => GetColorTombol(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </button>
                            <button id="color4" onClick={(e) => GetColorTombol(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Background
                        </label>
                        <div className="list-warna flex">
                            <button id="color1" onClick={(e) => GetColorBackground(e)} className="button-color bg-blue-800 rounded-2xl">   
                            </button>
                            <button id="color2" onClick={(e) => GetColorBackground(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </button>
                            <button id="color3" onClick={(e) => GetColorBackground(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </button>
                            <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={kirimdata} className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}