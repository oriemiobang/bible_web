import {  useState , useEffect} from "react";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiBookmarksSimpleFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hook/useAuthContext";
import { MdDelete } from "react-icons/md";

const BookMark= ()=> {

    const [bookMark, setBookmarkData] = useState(null)
    const {user} = useAuthContext()

    const fetchDatabase = () => {
        console.log("Fetching database...", user);
        if (user) {
          console.log('inside');
          fetch('/api/data', {
            method: 'GET', // The HTTP method should be outside of headers
            headers: {
              'Authorization': `Bearer ${user.token}`,
              'Content-Type': 'application/json', // Added for clarity
            },
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Error fetching Bible database data');
              }
              return response.json();
            })
            .then(data => {
            setBookmarkData(data[0].bookmarks);
            console.log('data',data[0].bookmarks)
            })
            .catch(err => {
              console.error(err.message);
            });
        }

      }

      useEffect(()=> {
        fetchDatabase()

      }, [])

      const handleDeleteBookmark = (id)=> {
        const bookmark = bookMark.filter(item => item._id !== id);
        setBookmarkData(bookmark);

         fetch(`/api/data/bookmark/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${user.token}`,
              'Content-Type': 'application/json',
            },
     
          })
         .then(response => {
            if (!response.ok) {
              throw new Error('Error deleting bookmark');
            }
            return response.json();
          })
         .then(data => {
            console.log('data after deleting',data)
            // setBookmarkData(data.data)
          })
         .catch(err => {
            console.error(err.message);
          });

      }

    return (
        
        <div className="h-screen md:w-[50%] w-full pb-96">

            <div  className=" p-3  flex justify-start text-3xl">
                Bookmarks
            </div>


            
        <div className= {bookMark && bookMark.length>0 ?"":"flex justify-center items-center w-full h-screen"} >
            {
         bookMark &&(
            bookMark.length > 0?
            <div className="">{

                bookMark.map((book, index) => (
                 <div key={index} className=" flex flex-col text-lg my-5 mx-5 p-3  border-l-2 border-blue-700">
                                     <p className="text-nowrap text-start text-gray-500">{book.book} </p>
                 <p className="text-start">{book.verse}</p>
                <div className="flex  justify-end gap-2 items-center"> <p className="text-nowrap  text-end text-gray-500"><span className="italic"> {book.formattedDate}</span> | <span className="italic">{book.version}</span></p>
                 <div onClick={()=>handleDeleteBookmark(book._id)} className="dark:text-gray-200 text-gray-600"><MdDelete size={25}/></div></div>
                 </div>
                ))
           }</div> 
   :
   <h1 >Bookmarks apear here</h1>

         )


                }
            
            {/* <div className = "md:hidden flex dark:bg-slate-900 z-50 bg-slate-50 bottom-0 flex-col fixed   h-16 w-[100%]  pl-5 pr-5"> */}

                      
                        <div className="flex justify-between px-5 w-[100%] pb-2 md:hidden dark:bg-slate-900   z-50 bg-slate-50 bottom-0 fixed ">
                          <NavLink to='/dailyText'>
                          <div className="flex items-center flex-col">
                          <RiHome6Line size={25} />
                          <p>Today</p>
                          </div>
                          </NavLink>
                          <NavLink to='/'>
                          <div className="flex items-center flex-col">
                          <MdOutlineMenuBook size={25} />
                          <p>Book</p>
                          </div>
                          </NavLink>
                         <NavLink to='/bookMark'>
                         <div className= 'text-orange-400 flex items-center flex-col'>
                          <PiBookmarksSimpleFill size={25}/>
                          <p>Bookmark</p>
                          </div>
                         </NavLink>
            
                        </div>
                        
                        
                 
            
        {/* </div> */}
        </div>
        </div>
    )
}

export default BookMark;