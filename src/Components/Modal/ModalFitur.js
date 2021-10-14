export default function ModalFitur() {
    return(
        <div className="modal-fitur flex flex-col">
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-col mb-3 mr-6">
                        <label className="text-white">
                            Icon
                        </label>
                        <select id="icon-list" name="icon">
                            <option className="text-white" value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-3 mr-6">
                        
                    </div>
                </div>
            </div>
            <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
        </div>
    )
}