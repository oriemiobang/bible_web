
// import { PiUserListFill } from "react-icons/pi";
// import user from '../assets/user.png'
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useLogout } from "../hook/useLogout";
import { CiMenuKebab } from "react-icons/ci";
// import { useAuthContext } from "../hook/useAuthContext";

const Header = ()=> {


  const {logout} = useLogout();
  // const {user} = useAuthContext()
  const handleClick = () => {
      logout();
  };


    const [isLight, setIsLight]= useState(true)

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
      });


      const element = document.documentElement
  useEffect(()=> {
    switch (theme) {
      case 'dark':
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break;
      case 'light':
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
        break;
      default:
        element.classList.remove("theme")
        break;
    }



  },[theme])

  const handleTheme = ()=> {

    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    setIsLight(!isLight)

    

  }



    return (
        <header className="flex dark:bg-slate-900 justify-between md:justify-around gap-14 w-[100%] p-2">
            <h1 className='font-semibold text-2xl hidden md:block' >Wëël Jwøk</h1>
            <div className="md:hidden"></div>
            <div className='flex gap-5 justify-end items-cente'>
               
           <div className="flex gap-2 md:gap-4 justify-end items-center">

           <div className="" onClick={handleTheme}>
          {!isLight? <MdOutlineLightMode  size={32}/>: <MdOutlineDarkMode size={32} />}
        </div>
            {localStorage.getItem("user") ?  <div className="h-12 mr-6 w-12 group cursor-pointer dark:bg-slate-800 bg-slate-300 p-2 rounded-full translate-x-5 transition-all duration-300 hover:scale-110">
                    <FaRegUser size={30} />
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                 <div className="min-w-24 dark:bg-slate-800 bg-stone-100 rounded p-4">
                  <button onClick={handleClick}  className="hover:text-gray-400 dark:text-white cursor-pointer">Logout</button>
                 </div>
               </div>
               </div> : <Link to={'/signup'}>
              <div className="bg-green-800 p-2 rounded-full cursor-pointer">
                 <h1 className="text-white font-semibold">Create account</h1>
               </div>
              </Link> } 


              <div className="h-12 hidden md:block  w-12 group cursor-pointer   p-2 rounded-full translate-x-5 transition-all duration-300 hover:scale-110">
              <CiMenuKebab size={35}/>
                    <div className="absolute top-0 right-0  pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                 <div className="min-w-24 dark:bg-slate-800 bg-stone-100 rounded p-4">
                <Link to={'/bookMark'}>
                <button   className="hover:text-gray-400 dark:text-white cursor-pointer">Bookmark</button>
                </Link>
                 </div>
               </div>
               </div>

          
               
                
           </div>
              
            </div>

            
        </header>
    )
}

export default Header