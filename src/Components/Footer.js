import logo_bakery from "../Assets/Images/RumahBakery.png"

export default function Footer({footerDummy}){
    return(
        <div className="footer flex lg:flex-row md:flex-col sm:flex-col justify-between" style={{color: "#FF8D50", backgroundColor: "#FEF1E6"}}>
            <div className="left-side">
                <img className="w-52" src={logo_bakery} alt="logo footer"/>
                <p className="slogan lg:mt-24 md:mt-15 sm:mt-8 font-bold">
                    {footerDummy.slogan}
                </p>
            </div>
            <div className="right-side lg:text-right md:text-left sm:text-left flex flex-col align-bottom lg:mt-auto md:mt-5 sm:mt-5">
                <p>
                    Jl. Sudirman no.21 blok 8, Semarang, Jawa tengah
                </p>
                <p>
                    Rumahbakery@gmail.com
                </p>
                <p>
                    08973636362364
                </p>
            </div>
        </div>
    )
}