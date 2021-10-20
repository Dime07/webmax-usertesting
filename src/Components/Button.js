export default function Button({ButtonName, Background}) {
    return(
        <div className="button rounded-md py-2 px-4 inline-block mb-3" style={{backgroundColor : Background}}>
            <p className="text-white font-medium lg:text-base md:text-sm sm:text-xs">
                {ButtonName}
            </p>
        </div>
    )
}