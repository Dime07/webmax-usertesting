import diskonimage from "../Assets/Images/diskon-img.png"

export default function Diskon() {
    return(
        <div className="diskon flex lg:flex-row md:flex-col sm:flex-col bg-peach-light justify-center" >
            <div className="left-side lg:py-0 md:py-5 sm:py-5 lg:text-left md:text-center sm:text-center my-auto">
                <p className="diskon-title" style={{color: '#FF8D50'}}>
                    Gratis Ongkos Kirim !!!
                </p>
                <p className="diskon-description">
                    Gratis ongkos kirim setiap pembelian 2 buah roti dengan 1 minuman
                </p>
            </div>
            <div className="right-side flex  justify-center">
                <img className="lg:inline md:hidden sm:hidden" src={diskonimage} alt="gambar diskon" style={{width: '80%'}}/>
            </div>
        </div>
    )
  }