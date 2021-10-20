export default function ModalSolusi(){
    return(
        <div className="modal-solusi flex flex-col">
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className="flex flex-col lg:w-1/2 md:w-flex sm:w-flex">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Judul
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Deskripsi
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div>
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
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
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
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
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
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

            <button className="bg-purple-light text-white rounded-md py-2 lg:mt-10 md:mt-20 sm:mt-20 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}