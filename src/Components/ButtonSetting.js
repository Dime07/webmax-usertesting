import { CogIcon } from '@heroicons/react/solid'

export default function ButtonSetting() {
    return(
        <div className="ButtonEdit rounded-md bg-blue-dark inline-block py-2 px-3">
            <p className="text-white font-medium">
                <CogIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-4 sm:w-4 text-white"/>
            </p>
        </div>
    )
  }