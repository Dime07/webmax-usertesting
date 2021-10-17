export default function Button({ButtonName}) {
    return(
        <div className="button rounded-md bg-peach-default py-2 px-4 inline-block mb-3">
            <p className="text-white font-medium lg:text-base md:text-sm sm:text-xs">
                {ButtonName}
            </p>
        </div>
    )
}