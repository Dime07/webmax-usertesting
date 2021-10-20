import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function ModalFitur({sendDummy}) {

    const [inputFields, setInputField] = useState([
        {
            icon : 'StarIcon1',
            fitur: 'Halo fitur 1'
        },
        {
            icon : 'StarIcon2',
            fitur: 'Halo fitur 2'
        },
        {
            icon : 'StarIcon3',
            fitur: 'Halo fitur 3'
        }
    ])

    const [inputDummy, setFiturDummy] = useState({
        colorIcon : "#FF8D50",
        colorDeskripsi : "black",
        bgcolor: "white"
    })

    function handleChangeInput(index, event) {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values)

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
                                    <select id="icon-list" name="icon" className="select">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
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


                </div>
            
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="flex flex-col mb-3 mr-6">
                        <div>
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Icon
                            </label>
                            <div className="list-warna flex">
                                <div id="color1" onClick={(e) => GetColorIcon(e)}  className="button-color bg-blue-800 rounded-2xl">   
                                </div>
                                <div id="color2" onClick={(e) => GetColorIcon(e)}  className="button-color bg-red-500 rounded-2xl ml-3">   
                                </div>
                                <div id="color3" onClick={(e) => GetColorIcon(e)}  className="button-color bg-green-600 rounded-2xl ml-3">   
                                </div>
                                <div id="color4" onClick={(e) => GetColorIcon(e)}  className="button-color bg-pink-700 rounded-2xl ml-3">   
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Deskripsi
                            </label>
                            <div className="list-warna flex">
                                <div id="color1" onClick={(e) => GetColorDeskripsi(e)}  className="button-color bg-blue-800 rounded-2xl">   
                                </div>
                                <div id="color2" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                                </div>
                                <div id="color3" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                                </div>
                                <div id="color4" onClick={(e) => GetColorDeskripsi(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-white lg:text-md md:text-md sm:text-sm">
                                Warna Background
                            </label>
                            <div className="list-warna flex">
                                <div id="color1" onClick={(e) => GetColorBackground(e)} className="button-color bg-blue-800 rounded-2xl">   
                                </div>
                                <div id="color2" onClick={(e) => GetColorBackground(e)} className="button-color bg-red-500 rounded-2xl ml-3">   
                                </div>
                                <div id="color3" onClick={(e) => GetColorBackground(e)} className="button-color bg-green-600 rounded-2xl ml-3">   
                                </div>
                                <div id="color4" onClick={(e) => GetColorBackground(e)} className="button-color bg-pink-700 rounded-2xl ml-3">   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto" onClick={kirimdata}> Simpan </button>
        </div>
    )
}