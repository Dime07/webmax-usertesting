import { UploadIcon } from '@heroicons/react/outline'
import { useState } from 'react/cjs/react.development';

export default function ModalVideo({mainColor, sendDummy, sendVideo}) {
    const [urlVideo, setUrlVideo] = useState("");
    const [colorVideo, setColorVideo] = useState("#FEF1E6");

    function GetColorBackground(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setColorVideo({...colorVideo, kodewarna})
        e.target.classList.toggle("button-active")
    }

    function previewimg(){
        let imgHero = document.getElementById("imgHero");
        let imgpreviewhero = document.getElementById("imgpreviewhero");
        const [file] = imgHero.files
        if (file){
            setUrlVideo(URL.createObjectURL(file))
            imgpreviewhero.src = URL.createObjectURL(file)
        }
    }

    function kirimdata(){
        sendDummy(colorVideo)
        sendVideo(urlVideo)
    }

    return(
        <div className="modal-video flex flex-col">
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6 w-full">
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Video
                        </label>
                        <input onChange={previewimg} id="imgHero" accept="video/*" type="file"  hidden/>
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
                    <div>
                        <label className="text-white lg:text-md md:text-md sm:text-sm">
                            Warna Background
                        </label>
                        <div className="list-warna flex">
                            <button id="color1" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                            </button>
                            <button id="color2" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                            </button>
                            <button id="color3" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                            </button>
                            <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
                            </button>
                            <button id="color5" onClick={(e) => GetColorBackground(e)} className="button-color bg-white rounded-2xl ml-3" >   
                            </button>
                            <button id="color6" onClick={(e) => GetColorBackground(e)} className="button-color bg-black rounded-2xl ml-3" >   
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto" onClick={kirimdata}> Simpan </button>
        </div>
    )
  }