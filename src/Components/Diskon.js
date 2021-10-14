import diskonimage from "../Assets/Images/diskon-img.png"

export default function Diskon() {
    return(
        <div className="diskon flex bg-peach-light justify-center" >
            <div className="left-side text-left my-auto">
                <p className="diskon-title" style={{color: '#FF8D50'}}>
                    Gratis Ongkos Kirim !!!
                </p>
                <p className="diskon-description">
                    Gratis ongkos kirim setiap pembelian 2 buah roti dengan 1 minuman
                </p>
            </div>
            <div className="right-side flex justify-center">
                <img src={diskonimage} alt="gambar diskon" style={{width: '80%'}}/>
            </div>
        </div>
    )
  }