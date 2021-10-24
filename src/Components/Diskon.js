import diskonimage from "../Assets/Images/diskon-img.png"

export default function Diskon({diskonDummy, url}) {
    return(
        <div className="diskon flex lg:flex-row md:flex-col sm:flex-col bg-peach-light justify-center" style={{backgroundColor : diskonDummy.bgcolor}} >
            <div className="left-side lg:py-0 md:py-5 sm:py-5 lg:text-left md:text-center sm:text-center my-auto">
                <p className="diskon-title" style={{color: diskonDummy.colorJudul}}>
                    {diskonDummy.judul}
                </p>
                <p className="diskon-description" style={{color : diskonDummy.colorDeskripsi}}>
                    {diskonDummy.deskripsi}
                </p>
            </div>
            <div className="right-side flex  justify-center">
                {url == undefined &&(
                    <img className="lg:inline md:hidden sm:hidden" src={diskonimage} alt="gambar diskon" style={{width: '80%'}}/>
                )}
                {url !== undefined &&(
                     <img className="lg:inline md:hidden sm:hidden" src={url} alt="gambar diskon" style={{width: '80%'}}/>
                )}
                
            </div>
        </div>
    )
  }