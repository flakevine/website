
export function HeaderIcon({icomponent, link, text}){

    return (
        <a href={link} target="_blank" 
        className="text-4xl text-violet-500 cursor-pointer
        hover:text-violet-600 group flex flex-col items-center">
            {icomponent}
            <div className="absolute rounded-lg p-1 text-white
             bg-gray-800 text-base hidden mt-10
             text-center group-hover:block">
                {text}
            </div>
        </a>
    )
}