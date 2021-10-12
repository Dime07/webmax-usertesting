export default function Button({ButtonName}) {
    return(
        <div className="button rounded-md bg-peach-default py-2 px-4 inline-block">
            <p className="text-white font-medium">
                {ButtonName}
            </p>
        </div>
    )
}