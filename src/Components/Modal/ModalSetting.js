import { UploadIcon } from '@heroicons/react/outline';
import { useState } from 'react/cjs/react.development';



export default function ModalSetting({sendDataColor, sendDataFont}) {
    const[warnaDasar, setWarnaDasar] = useState({
        warna1 : 'red',
        warna2 : 'green',
        warna3 : 'blue',
        warna4 : 'yellow'
    })

    const[font, setfont] = useState("Poppins")

    function previewimg(){
        let imgHero = document.getElementById("imgHero");
        let imgpreviewhero = document.getElementById("imgpreviewhero");
        const [file] = imgHero.files
        if (file){
            imgpreviewhero.src = URL.createObjectURL(file)
        }
    }
    
    function getcolor1(e){
        setWarnaDasar({...warnaDasar, warna1 : e.target.value})
    }

    function getcolor2(e){
        setWarnaDasar({...warnaDasar, warna2 : e.target.value})
    }

    function getcolor3(e){
        setWarnaDasar({...warnaDasar, warna3 : e.target.value})
    }

    function getcolor4(e){
        setWarnaDasar({...warnaDasar, warna4 : e.target.value})
    }

    function getFont(e) {
        setfont(e.target.value)
    }


    function kirimdata(){
        sendDataColor(warnaDasar)
        sendDataFont(font)
    }
    return(
        <div className="modal-setting flex flex-col">
            <div className="flex lg:flex-row md:flex-col sm:flex-col modal-setting-wrap">
                <div className="flex flex-col  lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Subdomain
                        </label>
                        <div className="flex">
                            <input placeholder="Masukkan Subdomain"/>
                            <p className="text-white lg:text-md md:text-md sm:text-sm ml-2 mt-1">
                                webmax.id
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Meta tag
                        </label>
                        <input placeholder="Masukkan judul"/>
                    </div>

                    <div className="flex flex-col mb-3 mr-6 w-full">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Fav icon 
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

                    <div className="flex flex-col mb-3 mr-6 w-full">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Template
                        </label>

                        <div className="flex flex-row w-full justify-between">
                            <div className="flex flex-row mt-2">
                                <div className="template-wrap flex justify-center">
                                    <p className="my-auto font-bold text-sm">Template 1</p>
                                </div>
                            </div>

                            <div className="flex flex-row mt-2">
                                <div className="template-wrap flex justify-center">
                                    <p className="my-auto font-bold text-sm">Template 2</p>
                                </div>
                            </div>

                            <div className="flex flex-row mt-2">
                                <div className="template-wrap flex justify-center">
                                    <p className="my-auto font-bold text-sm">Template 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna
                        </label>
                        <div className="flex justify-between mt-2">
                            <input type="color" onChange={(e)=> getcolor1(e)}/>
                            <input type="color" onChange={(e)=> getcolor2(e)}/>
                            <input type="color" onChange={(e)=> getcolor3(e)}/>
                            <input type="color" onChange={(e)=> getcolor4(e)}/>
                        </div>
                    </div>
                    <div className="input-icon flex flex-col mb-3">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Icon
                        </label>
                        <select id="icon-list" name="icon" className="select" onChange={(e) => getFont(e)}>
                            <option value="Poppins" style={{fontFamily : 'Poppins'}}>Poppins</option>
                            <option value="Roboto" style={{fontFamily : 'Roboto'}}>Roboto</option>
                            <option value="Inter" style={{fontFamily : 'Inter'}}>Inter</option>
                        </select>
                    </div>    
                </div>

            </div>

            <button onClick={kirimdata} className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>

        </div>
    )
  }