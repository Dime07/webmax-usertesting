import { UploadIcon } from '@heroicons/react/outline'

export default function ModalDiskon(){
    function previewimg(){
        let imgHero = document.getElementById("imgHero");
        let imgpreviewhero = document.getElementById("imgpreviewhero");
        const [file] = imgHero.files
        if (file){
            imgpreviewhero.src = URL.createObjectURL(file)
        }
    }
    return(
        <div className="modal-diskon flex flex-col">
            <div className="flex">
                <div className="flex flex-col  w-1/2">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Judul
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

                <div className="flex flex-col w-1/2">
                    <div className="flex flex-col mb-3 mr-6">
                        <div>
                            <label className="text-white">
                                Warna Judul
                            </label>
                            <div className="list-warna flex">
                                <div id="color1"  className="button-color bg-blue-800 rounded-2xl">   
                                </div>
                                <div id="color2"  className="button-color bg-red-500 rounded-2xl ml-3">   
                                </div>
                                <div id="color3"  className="button-color bg-green-600 rounded-2xl ml-3">   
                                </div>
                                <div id="color4"  className="button-color bg-pink-700 rounded-2xl ml-3">   
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <label className="text-white">
                                Warna Deskripsi
                            </label>
                            <div className="list-warna flex">
                                <div id="color1"  className="button-color bg-blue-800 rounded-2xl">   
                                </div>
                                <div id="color2"  className="button-color bg-red-500 rounded-2xl ml-3">   
                                </div>
                                <div id="color3"  className="button-color bg-green-600 rounded-2xl ml-3">   
                                </div>
                                <div id="color4"  className="button-color bg-pink-700 rounded-2xl ml-3">   
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-white">
                                Warna Background
                            </label>
                            <div className="list-warna flex">
                                <div id="color1"  className="button-color bg-blue-800 rounded-2xl">   
                                </div>
                                <div id="color2"  className="button-color bg-red-500 rounded-2xl ml-3">   
                                </div>
                                <div id="color3"  className="button-color bg-green-600 rounded-2xl ml-3">   
                                </div>
                                <div id="color4"  className="button-color bg-pink-700 rounded-2xl ml-3">   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}