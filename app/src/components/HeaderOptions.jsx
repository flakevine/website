import { AiFillGithub } from 'react-icons/ai'
import { HeaderIcon } from './HeaderIcon'

export function HeaderOptions(){
    return (
        <div className='flex gap-4 items-center'>
            <HeaderIcon icomponent={<AiFillGithub/>}
            link="https://github.com/flakevine"
            text="Github"/>
        </div>
    )   
}