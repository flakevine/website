import { HeaderOptions } from './HeaderOptions'
import logo from './assets/flakevine-logo.png' 

export function Header(){

    return (
        <header className="flex justify-around items-center text-white
         p-2 rounded-b-2xl bg-gray-900">
            <h2 className="text-3xl flex items-center select-none">
                <img className='h-20' src={logo}/>flakevine
            </h2>
            <HeaderOptions/>
        </header>
    )
}