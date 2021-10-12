import { useState } from "react";
export default function ModalHero({sendColor}) {
    const [warna, setWarna] = useState("");
    const [upload, setUpload] = useState(false);


    function GetColor(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setWarna(kodewarna) 
    }

    function kirimdata(){
        sendColor(warna)
    }

    function previewimg(){
        let imgHero = document.getElementById("imgHero");
        let imgpreviewhero = document.getElementById("imgpreviewhero");
        const [file] = imgHero.files
        if (file){
            imgpreviewhero.src = URL.createObjectURL(file)
            setUpload(true)
            console.log(upload)
        }
    }

    return(
        <div className="modal-hero flex flex-col">
            {/* bagian judul */}
            <div className="flex">
                <div className="flex flex-col mb-3 mr-6">
                    <label className="text-white">
                        Judul
                    </label>
                    <input placeholder="Masukkan judul"/>
                </div>
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
            </div>
            {/* bagian deskrips */}
            <div className="flex">
                <div className="flex flex-col mb-3 mr-6">
                    <label className="text-white">
                        Deskripsi
                    </label>
                    <input placeholder="Masukkan judul"/>
                </div>
                <div>
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
            </div>
            {/* bagian tombol */}
            <div className="flex">
                <div className="flex flex-col mb-3 mr-6">
                    <label className="text-white">
                        Tombol
                    </label>
                    <input placeholder="Masukkan judul"/>
                </div>
                <div>
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
            </div>
            {/* Upload Gambar */}
            <div className="flex">
                <div className="flex flex-col mb-3 mr-6 w-full">
                    <label className="text-white">
                        Gambar
                    </label>
                    <input onChange={previewimg} id="imgHero" accept="image/*" type="file"  hidden/>
                    <label className="upload-label" for="imgHero">Upload</label>
                    <div className="preview hidden">
                        <img id="imgpreviewhero" src="#" alt="gambar kamu"/>
                        <p className="text-white my-auto">
                            namafile
                        </p>
                    </div>
                </div>
            </div>

            <button onClick={kirimdata} className="bg-pink-900 text-white"> Simpan </button>
        </div>
    )
}