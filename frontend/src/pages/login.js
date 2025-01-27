import { Link, NavLink, useNavigate } from "react-router-dom"
import bible_img from '../assets/bible_img.png'
import { useState } from "react";
import { useLogin } from "../hook/useLogin";
const LogIn = ()=> {

    
   const [email , setEmail ] = useState('')
   const [password, setPassword ] = useState('')
   const {login , error , isLoading} = useLogin()

   const handleSubmit = async (e) =>{
       e.preventDefault();
       await login(email, password)
   }

    return (
        <div className="h-screen flex w-full"> 
            <div className="w-[30%] h-full dark:bg-slate-950 bg-gray-100 hidden md:block">
            <Link to='/'><h1 className="font-bold text-4xl mt-5 text-start ml-5">Wëël Jwøk</h1></Link>
                <div className="flex flex-col items-center justify-center mt-6">
                <div className="flex flex-col items-start text-2xl font-bold">
                <p className=" ">Explore the Word,</p>
                <p className="">  grow in faith daily,</p>
                <p className="">follow your journey, and</p>
                <p className="">grow in faith daily</p>
                </div>
                <div className="bg-gray-400 text-white rounded-full p-2 text-2xl font-semibold inline-block mt-2">
                    
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.oriemiobangoriemi.dha_anywaa_bible"><h1>Get the app</h1></a>
                </div>
                </div>
                <img className="mx-10 mt-20" src={bible_img}></img>

            </div>
            <div className="md:w-[70%] w-[100%] h-full  flex justify-center items-center">
            <div className="flex flex-col w-[80%]">
            <div class="h-screen flex items-center w-[100%] justify-center">
            <div class="w-full max-w-md dark:bg-slate-800 bg-white  shadow-lg rounded-lg p-6">
                <h1 class="text-4xl font-bold text-gray-800 text-start dark:text-gray-200 mb-4">Log in</h1>
                <p class="text-gray-600 mb-6 text-start dark:text-gray-300">
                Don't hava an account? 
                <Link to='/signup'><span href="/signup" class="text-blue-500  hover:underline pl-2">Sign up</span></Link>
                </p>
                <form onSubmit={handleSubmit} class="login flex flex-col space-y-4">
                <input 
                 onChange={(e)=>setEmail(e.target.value)} 
                 value={email}
                    type="email" 
                    placeholder="email" 
                    class="w-full px-4 py-2 border dark:bg-slate-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                    type="password" 
                    placeholder="Password" 
                    class="w-full px-4 py-2 border dark:bg-slate-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                disabled={isLoading} 
                    type="submit" 
                    value="Log in" 
                    class="w-20 bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 cursor-pointer transition duration-300"
                >Submit</button>
                     {error && <div className="border-2 border-[#e7195a]">{error}</div>}
                </form>
            </div>
        </div>
            </div>
            </div>  
        </div>
       
    )

}


export default LogIn