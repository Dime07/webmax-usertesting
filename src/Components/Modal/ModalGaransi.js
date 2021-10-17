import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function ModalGaransi() {
    const [inputFields, setInputField] = useState([
        {
            icon : '',
            fitur: ''
        },

        
    ])

    function handleChangeInput(index, event) {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values)

    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("inputFields", inputFields)
    }

    function handleAddInputField() {
        setInputField([...inputFields, {icon: '', fitur: ''}])
    }

    function handleRemoveField(index){
        const values = [...inputFields];
        values.splice(index, 1);
        setInputField(values);
    }
    return(
        <div className="modal-garansi flex flex-col">
            <div className="flex modal-garansi-wrap">
                <div className="flex flex-col w-1/2" >
                    <div className="input-fitur flex flex-col mb-3">
                        <label className="text-white">
                            Judul
                        </label>
                        <input name="fitur"/>
                    </div>
                    {inputFields.map((inputField, index) => (
                        <div key={index}>
                            <div className="input-wrap flex flex-col mb-3 mr-6">
                                <div className="input-icon flex flex-col mb-3">
                                    <label className="text-white">
                                        Icon
                                    </label>
                                    <select id="icon-list" name="icon" value={inputField.icon}>
                                        <option className="text-white" value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="input-fitur flex flex-col mb-3">
                                    <label className="text-white">
                                        Fitur
                                    </label>
                                    <input name="fitur" value={inputField.fitur} onChange={event => handleChangeInput(index, event)}/>
                                </div>
                            </div>
                        </div>
                    ))}  
                    <div className="button-wrap-fitur w-40 flex justify-between mx-auto">
                        <button className="bg-purple-default text-white rounded-md py-2 mt-2 inline-block w-12 mx-auto" onClick={handleAddInputField}> <PlusCircleIcon className="h-8 w-8 mx-auto"/></button>
                        <button className="bg-purple-default text-white rounded-md py-2 mt-2 inline-block w-12 mx-auto" onClick={handleRemoveField}> <MinusCircleIcon className="h-8 w-8 mx-auto"/></button>
                        
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
            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto" onClick={handleSubmit}> Simpan </button>
        </div>
    )
}