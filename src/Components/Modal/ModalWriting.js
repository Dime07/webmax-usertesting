export default function ModalWriting({copywriting,fitur,garansi}) {
    return(
        <div className="modal-writing bg-white w-full p-5 ">
            <div className="copywriting-wrap flex flex-col h-full">
                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Hero section</p>
                    <ul className="list-disc">
                        <li>{copywriting.HeroJudul}</li>
                        <li>{copywriting.HeroDeskripsi}</li>
                    </ul>
                </div>

                <hr></hr>

                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Solusi section</p>
                    <ul className="list-disc">
                        <li>{copywriting.SolusiJudul}</li>
                        <li>{copywriting.SolusiDeskripsi}</li>
                    </ul>
                </div>

                <hr></hr>

                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Fitur section</p>
                    <ul className="list-disc">
                        {fitur.map((item, index) => (
                            <li key={index}>
                                {item.fitur}
                            </li>
                        ))}
                    </ul>
                </div>

                <hr></hr>
                
                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Garansi section</p>
                    <ul className="list-disc">
                        <li>{copywriting.GaransiJudul}</li>
                    </ul>
                </div>

                <hr></hr>

                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Fitur section</p>
                    <ul className="list-disc">
                        {garansi.map((item, index) => (
                            <li key={index}>
                                {item.garansi}
                            </li>
                        ))}
                    </ul>
                </div>

                <hr></hr>

                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Diskon section</p>
                    <ul className="list-disc">
                        <li>{copywriting.DiskonJudul}</li>
                        <li>{copywriting.DiskonDeskripsi}</li>
                    </ul>
                </div>

                <hr></hr>

                <div className="my-4">
                    <p className="text-lg font-bold">copywriting CTA section</p>
                    <ul className="list-disc">
                        <li>{copywriting.CTAJudul}</li>
                    </ul>
                </div>

                <hr></hr>

                <div className="my-4">
                    <p className="text-lg font-bold">copywriting Footer section</p>
                    <ul className="list-disc">
                        <li>{copywriting.Slogan}</li>
                    </ul>
                </div>
            </div>



        </div>
    )
  }