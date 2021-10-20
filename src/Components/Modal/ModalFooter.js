export default function ModalFooter() {
    return(
        <div className='modal-footer flex flex-col'>
            <div className="flex flex-col">
                <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
                    <div className="input-fitur flex flex-col mb-3">
                        <label className="text-white">
                            Slogan
                        </label>
                        <input name="fitur"/>
                    </div>
                </div>
                <button className="bg-purple-light text-white rounded-md py-2 mt-10 inline-block w-40 mx-auto"> Simpan </button>
            </div>
        </div>
    )
  }