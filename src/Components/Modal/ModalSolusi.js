export default function ModalSolusi(){
    return(
        <div className="modal-solusi flex flex-col">
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Judul
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Deskripsi
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>
                </div>

                <div className="flex flex-col w-1/2">
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

            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}