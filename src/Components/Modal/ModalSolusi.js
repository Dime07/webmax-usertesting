import { useState } from "react";

export default function ModalSolusi({sendDummy}){

    const [inputDummy, setSolusiDummy] = useState({
        judul : "Anda sulit untuk menemukan roti yang memenuhi kebutuhan nutrisi anda?",
        deskripsi : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus lorem, porta et aliquam ornare, fermentum sed est. Duis molestie velit nec ante semper maximus. Sed pretium lobortis erat in tempor. Sed sodales dolor",
        bgcolor : "white",
        colorJudul : "#FF8D50",
        colorDeskripsi : "#FF8D50",
    });

    //-----input dummy data----
    function getjudul(e){
        setSolusiDummy({...inputDummy, judul: e.target.value})
    }

    function getdeskripsi(e) {
        setSolusiDummy({...inputDummy, deskripsi : e.target.value})
    }

    function GetColorJudul(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setSolusiDummy({...inputDummy, colorJudul : kodewarna})
        e.target.classList.toggle("button-active")
    
    }

    function GetColorDeskripsi(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setSolusiDummy({...inputDummy, colorDeskripsi : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function GetColorBackground(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setSolusiDummy({...inputDummy, bgcolor : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function kirimdata(){
        sendDummy(inputDummy)
    }

    return(
        <div className="modal-solusi flex flex-col">
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className="flex flex-col lg:w-1/2 md:w-flex sm:w-flex">
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
                        <textarea placeholder="Masukkan Deskripsi" onChange={getdeskripsi}/>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div>
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Judul
                        </label>
                        <div className="list-warna flex">
                            <button id="color1"  onClick={(e) => GetColorJudul(e)}  className="button-color bg-blue-800 rounded-2xl">   
                            </button>
                            <button id="color2"  onClick={(e) => GetColorJudul(e)}  className="button-color bg-red-500 rounded-2xl ml-3">   
                            </button>
                            <button id="color3"  onClick={(e) => GetColorJudul(e)}  className="button-color bg-green-600 rounded-2xl ml-3">   
                            </button>
                            <button id="color4"  onClick={(e) => GetColorJudul(e)}  className="button-color bg-pink-700 rounded-2xl ml-3">   
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Deskripsi
                        </label>
                        <div className="list-warna flex">
                            <button id="color1"  onClick={(e) => GetColorDeskripsi(e)}  className="button-color bg-blue-800 rounded-2xl">   
                            </button>
                            <button id="color2"  onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                            </button>
                            <button id="color3"  onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                            </button>
                            <button id="color4"  onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
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

            <button className="bg-purple-light text-white rounded-md py-2 lg:mt-10 md:mt-20 sm:mt-20b inline-block w-40 mx-auto" onClick={kirimdata}> Simpan </button>
        </div>
    )
}