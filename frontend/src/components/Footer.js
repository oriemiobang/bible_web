

const Footer = ()=> {
    return (
        <footer className="dark:bg-slate-800 bg-slate-200 md:h-80 gap-3 pb-36 w-full items-center flex md:flex-row flex-col  justify-around pt-5 md:pt-10">
            {/* <p>�� 2021 DHA Anywaa. All rights reserved.</p> */}

            <div className="flex flex-col items-center justify-center mt-20">
            <h1 className='font-bold text-2xl md:text-4xl hidden md:block' >Wëël Jwøk</h1>
            <div className="flex flex-col items-center justify-center mt-6">
                <div className="flex flex-col items-center text-xl font-bold">
                <p className=" ">Explore the Word,</p>
                <p className="">  grow in faith daily,</p>
                <p className="">follow your journey, and</p>
                <p className="">grow in faith daily</p>
                </div>
                <div className="dark:bg-slate-800 border border-slate-900 dark:border-gray-400 text-gray-500  dark:text-white rounded-full p-2 text-2xl font-semibold inline-block mt-2">
                    
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.oriemiobangoriemi.dha_anywaa_bible"><h1>Get the app</h1></a>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-7">
                <ul className="flex flex-col gap-2 items-start text-xl">
                   <a  href="https://oriemioriemi.netlify.app/"> <li>Contact us</li></a>
                   <a href=""> <li>About the app</li></a>
                   <a href=""> <li>Privacy Policy</li></a>
                </ul>
            </div>
            <div className="flex items-center  md:items-start flex-col mt-2 gap-1 ">
            <p className="text-2xl font-semibold">Bella Tech</p>
            <a className="text-xl" href="https://oriemioriemi.netlify.app/">About the developer</a>
                
                <p>&copy; 2024 Wëël Jwøk. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;