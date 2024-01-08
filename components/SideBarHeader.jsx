
import {SiOpenai} from 'react-icons/si'
import ThemeToggle from './ThemeToggle'
const SideBarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
        <SiOpenai className='w-10 h-10 text-primary'/>
        <h2 className="text-xl font-bold text-primary">GPT Tourism</h2>
        <ThemeToggle />
    </div>
  )
}

export default SideBarHeader