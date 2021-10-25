import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import { UploadIcon } from '@heroicons/react/outline';
import fiturImg from "../../Assets/Images/fitur-img.png"
import notUploaded from "../../Assets/Images/notUploaded.png"

export default function ModalFitur({sendDummy, sendInputDummy, sendImage, mainColor}) {

    const [inputFields, setInputField] = useState([
        {
            icon : 'Bintang',
            fitur: 'Delivery yang cepat dan bisa diantar kerumah'
        },
        {
            icon : 'Bintang',
            fitur: 'Delivery yang cepat dan bisa diantar ke kantor'
        },
        {
            icon : 'Bintang',
            fitur: 'Delivery yang cepat dan bisa diantar ke depan'
        }
    ])

    const [inputDummy, setFiturDummy] = useState({
        judul : "Berikut yang akan anda dapatkan",
        colorIcon : "#FF8D50",
        colorDeskripsi : "black",
        bgcolor: "white"
    })

    const [urlImage, setUrlImage] = useState(fiturImg);

    function handleChangeInput(index, event) {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values)

    }

    function getIcon(event,index){
        const items = [...inputFields];
        const item = {...items[index]}
        item.icon = event.target.value;

        items[index] = item
        setInputField(items)
        
    }
    

    function handleAddInputField() {
        setInputField([...inputFields, {icon: '', fitur: ''}])
    }

    function handleRemoveField(index){
        const values = [...inputFields];
        values.splice(index, 1);
        setInputField(values);
    }

    function GetColorIcon(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setFiturDummy({...inputDummy, colorIcon : kodewarna})
        e.target.classList.toggle("button-active")
    
    }

    function GetColorDeskripsi(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setFiturDummy({...inputDummy, colorDeskripsi : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function GetColorBackground(e){
        let element = document.getElementById(e.target.id);
        let elemetncss = getComputedStyle(element)
        let kodewarna = elemetncss.backgroundColor;
        setFiturDummy({...inputDummy, bgcolor : kodewarna})
        e.target.classList.toggle("button-active")
    }

    function kirimdata(){
        sendDummy(inputDummy)
        sendInputDummy(inputFields)
        sendImage(urlImage)
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

    function emptyImage(e){
        e.target.src = notUploaded
    }

    return(
        <div className="modal-fitur flex flex-col" onSubmit={kirimdata}>
            <div className="flex lg:flex-row md:flex-col sm:flex-col modal-fitur-wrap" >
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full" >
                    {inputFields.map((inputField, index) => (
                        <div key={index}>
                            <div className="input-wrap flex flex-col mb-3 mr-6">
                                <div className="input-icon flex flex-col mb-3">
                                    <label className="text-white lg:text-md md:text-md sm:text-sm">
                                        Icon
                                    </label>
                                    <select id="icon-list" name="icon" className="select" onChange={event => getIcon(event,index)}>
                                        <option value="Bintang">Bintang</option>
                                        <option value="Checklist">Checklist</option>
                                    </select>
                                </div>
                                <div className="input-fitur flex flex-col mb-3">
                                    <label className="text-white lg:text-md md:text-md sm:text-sm">
                                        Fitur
                                    </label>
                                    <input name="fitur" value={inputField.fitur} onChange={event => handleChangeInput(index, event)}/>
                                </div>
                            </div>
                        </div>
                    ))}  
                    <div className="button-wrap-fitur w-40 flex justify-between mx-auto">
                        <button className="bg-purple-default text-white rounded-md py-2 mt-2 inline-block lg:w-12 md:w-10 sm:w-10 mx-auto" onClick={handleAddInputField}> <PlusCircleIcon className="lg:h-8 md:h-6 sm:h-6 lg:w-8 md:w-6 sm:w-6 mx-auto"/></button>
                        <button className="bg-purple-default text-white rounded-md py-2 mt-2 inline-block lg:w-12 md:w-10 sm:w-10 mx-auto" onClick={handleRemoveField}> <MinusCircleIcon className="lg:h-8 md:h-6 sm:h-6 lg:w-8 md:w-6 sm:w-6 mx-auto"/></button>
                        
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
                            <img className="mx-auto" id="imgpreviewhero" src="#" alt="" onError={emptyImage}/>
                        </div>
                    </div>


                </div>
            
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <div>
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Icon
                            </label>
                            <div className="list-warna flex">
                                <button id="color1" onClick={(e) => GetColorIcon(e)}  className="button-color  rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                                </button>
                                <button id="color2" onClick={(e) => GetColorIcon(e)}  className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                                </button>
                                <button id="color3" onClick={(e) => GetColorIcon(e)}  className="button-color  rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorIcon(e)}  className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorIcon(e)} className="button-color bg-white rounded-2xl ml-3" >   
                                </button>
                                <button id="color4" onClick={(e) => GetColorIcon(e)} className="button-color bg-black rounded-2xl ml-3" >   
                                </button>
                                
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Deskripsi
                            </label>
                            <div className="list-warna flex">
                                <button id="color1" onClick={(e) => GetColorDeskripsi(e)}  className="button-color rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                                </button>
                                <button id="color2" onClick={(e) => GetColorDeskripsi(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
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
                                <button id="color1" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl" style={{backgroundColor : mainColor.warna1}}>   
                                </button>
                                <button id="color2" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna2}}>   
                                </button>
                                <button id="color3" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna3}}>   
                                </button>
                                <button id="color4" onClick={(e) => GetColorBackground(e)} className="button-color rounded-2xl ml-3" style={{backgroundColor : mainColor.warna4}}>   
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
            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto" onClick={kirimdata}> Simpan </button>
        </div>
    )
}