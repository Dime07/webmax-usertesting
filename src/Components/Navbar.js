import logo_bakery from "../Assets/Images/RumahBakery.png"

export default function Navbar({logo}) { 
    return(
        <div className="Navbar h-12 w-full bg-peach-light text-center flex">
            {logo == undefined &&(
                <img className="mx-auto my-auto h-2/5" src={logo_bakery} alt="logo-brand" />
            )}
            {logo !== undefined && (
                <img className="mx-auto my-auto h-2/5" src={logo} alt="logo-brand" />
            )}
            
        </div>
    )
 }