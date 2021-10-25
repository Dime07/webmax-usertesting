import { useState } from "react";

export default function ModalFooter({sendDummy}) {
    const [inputDummy, setFooterDummy] = useState({
        slogan : "Roti Hangat, Siap Diangkat",
    });

    function getslogan(e){
        setFooterDummy({...inputDummy, slogan: e.target.value})
    }

    function kirimdata(){
        sendDummy(inputDummy)
    }
    return(
        <div className='modal-footer flex flex-col'>
            <div className="flex flex-col">
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="input-fitur flex flex-col mb-3">
                        <label className="text-white">
                            Slogan
                        </label>
                        <input name="fitur" onChange={getslogan} />
                    </div>
                </div>
                <button onClick={kirimdata} className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
            </div>
        </div>
    )
  }