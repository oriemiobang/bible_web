
import { useEffect, useState } from "react";
import Header from "../components/Header"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { TfiViewListAlt } from "react-icons/tfi";
import { FaShareNodes } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiBookmarksSimpleFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hook/useAuthContext";
import { MdCancel } from "react-icons/md";
// import { OrbitProgress } from 'react-spinners';
import { PulseLoader } from 'react-spinners';


const HomePage  = ()=> {

  
  const bookList = [
    {
      'title': 'Genesis',
      'amharic': '01_ኦሪት ዘፍጥረት.json',
      'anywaa': 'Wïlöölö',
      'number': '50',
      'abbrev': 'GEN'
    },
    {
      'title': 'Exodus',
      'amharic': '02_ኦሪት ዘጸአት.json',
      'anywaa': 'Bwøth Wøk',
      'number': '40',
      'abbrev': 'EXO'
    },
    {
      'title': 'Leviticus',
      'amharic': '03_ኦሪት ዘሌዋውያን.json',
      'anywaa': 'Ciik Kiper Dïlämme',
      'number': '27',
      'abbrev': 'LEV'
    },
    {
      'title': 'Numbers',
      'amharic': '04_ኦሪት ዘኍልቍ.json',
      'anywaa': 'Kwään Jiy',
      'number': '36',
      'abbrev': 'NUM'
    },
    {
      'title': 'Deuteronomy',
      'amharic': '05_ኦሪት ዘዳግም.json',
      'anywaa': 'Tiet Ciik',
      'number': '34',
      'abbrev': 'DEU'
    },
    {
      'title': 'Joshua',
      'amharic': '06_መጽሐፈ ኢያሱ ወልደ ነዌ.json',
      'anywaa': 'Jøcua',
      'number': '24',
      'abbrev': 'JOS'
    },
    {
      'title': "Judges",
      'amharic': '07_መጽሐፈ መሣፍንት.json',
      'anywaa': 'Pïëmme',
      'number': '21',
      'abbrev': 'JDG'
    },
    {
      'title': "Ruth",
      'amharic': '08_መጽሐፈ ሩት.json',
      'anywaa': 'Ruuth',
      'number': '4',
      'abbrev': 'RUT'
    },
    {
      'title': "1 Samuel",
      'amharic': '09_መጽሐፈ ሳሙኤል ቀዳማዊ.json',
      'anywaa': '1 Camiel',
      'number': '31',
      'abbrev': '1SA'
    },
    {
      'title': "2 Samuel",
      'amharic': '10_መጽሐፈ ሳሙኤል ካል.json',
      'anywaa': '2 Camiel',
      'number': '24',
      'abbrev': '2SA'
    },
    {
      'title': "1 Kings",
      'amharic': '11_መጽሐፈ ነገሥት ቀዳማዊ.json',
      'anywaa': '1 Nyeye',
      'number': '22',
      'abbrev': '1KI'
    },
    {
      'title': "2 Kings",
      'amharic': '12_መጽሐፈ ነገሥት ካልዕ.json',
      'anywaa': '2 Nyeye',
      'number': '25',
      'abbrev': '2KI'
    },
    {
      'title': "1 Chronicles",
      'amharic': '13_መጽሐፈ ዜና መዋዕል ቀዳማዊ.json',
      'anywaa': '1 Luup Nyeye',
      'number': '29',
      'abbrev': '1CH'
    },
    {
      'title': "2 Chronicles",
      'amharic': '14_መጽሐፈ ዜና መዋዕል ካልዕ.json',
      'anywaa': '2 Luup Nyeye',
      'number': '36',
      'abbrev': '2CH'
    },
    {
      'title': "Ezra",
      'amharic': '15_መጽሐፈ ዕዝራ.json',
      'anywaa': 'Edhera',
      'number': '10',
      'abbrev': 'EZR'
    },
    {
      'title': "Nehemiah",
      'amharic': '16_መጽሐፈ ነህምያ.json',
      'anywaa': 'Neemiya',
      'number': '13',
      'abbrev': 'NEH'
    },
    {
      'title': "Esther",
      'amharic': '17_መጽሐፈ አስቴር.json',
      'anywaa': 'Acther',
      'number': '10',
      'abbrev': 'EST'
    },
    {
      'title': "Job",
      'amharic': '18_መጽሐፈ ኢዮብ.json',
      'anywaa': 'Jööp',
      'number': '42',
      'abbrev': 'JOB'
    },
    {
      'title': "Psalms",
      'amharic': '19_መዝሙረ ዳዊት.json',
      'anywaa': 'Dut Pwøc',
      'number': '150',
      'abbrev': 'PSA'
    },
    {
      'title': "Proverbs",
      'amharic': '20_መጽሐፈ ምሳሌ.json',
      'anywaa': 'Pwöc Leec Wïc',
      'number': '31',
      'abbrev': 'PRO'
    },
    {
      'title': "Ecclesiastes",
      'amharic': '21_መጽሐፈ መክብብ.json',
      'anywaa': 'Luup Dïpööy',
      'number': '12',
      'abbrev': 'ECC'
    },
    {
      'title': "Song of Solomon",
      'amharic': '22_መኃልየ መኃልይ ዘሰሎሞን.json',
      'anywaa': 'Obeec Dudi',
      'number': '8',
      'abbrev': 'SNG'
    },
    {
      'title': 'Isaiah',
      'amharic': '23_ትንቢተ ኢሳይያስ.json',
      'anywaa': 'Aydheea',
      'number': '66',
      'abbrev': 'ISA'
    },
    {
      'title': 'Jeremiah',
      'amharic': '24_ትንቢተ ኤርምያስ.json',
      'anywaa': 'Jeremaya',
      'number': '52',
      'abbrev': 'JER'
    },
    {
      'title': 'Lamentations',
      'amharic': '25_ሰቆቃው ኤርምያስ.json',
      'anywaa': 'Wëël Kïmmö',
      'number': '5',
      'abbrev': 'LAM'
    },
    {
      'title': 'Ezekiel',
      'amharic': '26_ትንቢተ ሕዝቅኤል.json',
      'anywaa': 'Edhikiel',
      'number': '48',
      'abbrev': 'EZK'
    },
    {
      'title': 'Daniel',
      'amharic': '27_ትንቢተ ዳንኤል.json',
      'anywaa': 'Daniel',
      'number': '12',
      'abbrev': 'DAN'
    },
    {
      'title': 'Hosea',
      'amharic': '28_ትንቢተ ሆሴዕ.json',
      'anywaa': 'Odheea',
      'number': '14',
      'abbrev': 'HOS'
    },
    {
      'title': 'Joel',
      'amharic': '29_ትንቢተ ኢዮኤል.json',
      'anywaa': 'Jool',
      'number': '3',
      'abbrev': 'JOL'
    },
    {
      'title': 'Amos',
      'amharic': '30_ትንቢተ አሞጽ.json',
      'anywaa': 'Amøc',
      'number': '9',
      'abbrev': 'AMO'
    },
    {
      'title': 'Obadiah',
      'amharic': '31_ትንቢተ አብድዩ.json',
      'anywaa': 'Obadiya',
      'number': '1',
      'abbrev': 'OBA'
    },
    {
      'title': 'Jonah',
      'amharic': '32_ትንቢተ ዮናስ.json',
      'anywaa': 'Joona',
      'number': '4',
      'abbrev': 'JON'
    },
    {
      'title': 'Micah',
      'amharic': '33_ትንቢተ ሚክያስ.json',
      'anywaa': 'Mikiya',
      'number': '7',
      'abbrev': 'MIC'
    },
    {
      'title': 'Nahum',
      'amharic': '34_ትንቢተ ናሆም.json',
      'anywaa': 'Neeyam',
      'number': '3',
      'abbrev': 'NAH'
    },
    {
      'title': 'Habakkuk',
      'amharic': '35_ትንቢተ ዕንባቆም.json',
      'anywaa': 'Abakuk',
      'number': '3',
      'abbrev': 'HAB'
    },
    {
      'title': 'Zephaniah',
      'amharic': '36_ትንቢተ ሶፎንያስ.json',
      'anywaa': 'Jepaniya',
      'number': '3',
      'abbrev': 'ZEP'
    },
    {
      'title': 'Haggai',
      'amharic': '37_ትንቢተ ሐጌ.json',
      'anywaa': 'Agëë',
      'number': '2',
      'abbrev': 'HAG'
    },
    {
      'title': 'Zechariah',
      'amharic': '38_ትንቢተ ዘካርያስ.json',
      'anywaa': 'Dhekaraya',
      'number': '14',
      'abbrev': 'ZEC'
    },
    {
      'title': 'Malachi',
      'amharic': '39_ትንቢተ ሚልክያ.json',
      'anywaa': 'Milkiya',
      'number': '4',
      'abbrev': 'MAL'
    },
    {
      'title': 'Matthew',
      'anywaa': 'Mathiew',
      'amharic': '40_የማቴዎስ ወንጌል.json',

      'number': '28',
      'abbrev': 'MAT'
    },
    {
      'title': 'Mark',
      'anywaa': 'Maak',
      'amharic': '41_የማርቆስ ወንጌል.json',
 
      'number': '16',
      'abbrev': 'MRK'
    },
    {
      'title': 'Luke',
      'anywaa': 'Luk',
      'amharic': '42_የሉቃስ ወንጌል.json',

      'number': '24',
      'abbrev': 'LUK'
    },
    {
      'title': 'John',
      'anywaa': 'Jøøn',
      'amharic': '43_የዮሐንስ ወንጌል.json',
 
      'number': '21',
      'abbrev': 'JHN'
    },
    {
      'title': 'Acts',
      'anywaa': 'Moa Tïïc Nyïïatwieli',
      'amharic': '44_የሐዋርያት ሥራ.json',
 
      'number': '28',
      'abbrev': 'ACT'
    },
    {
      'title': 'Romans',
      'anywaa': 'Röm',
      'amharic': '45_ወደ ሮሜ ሰዎች.json',
   
      'number': '16',
      'abbrev': 'ROM'
    },
    {
      'title': '1 Corinthians',
      'anywaa': '1 Körin',
      'amharic': '46_1ኛ ወደ ቆሮንቶስ ሰዎች.json',

      'number': '16',
      'abbrev': '1CO'
    },
    {
      'title': '2 Corinthians',
      'anywaa': '2 Körin',
      'amharic': '47_2ኛ ወደ ቆሮንቶስ ሰዎች.json',
  
      'number': '13',
      'abbrev': '2CO'
    },
    {
      'title': 'Galatians',
      'anywaa': 'Galeecia',
      'amharic': '48_ወደ ገላትያ ሰዎች.json',

      'number': '6',
      'abbrev': 'GAL'
    },
    {
      'title': 'Ephesians',
      'anywaa': 'Epeca',
      'amharic': '49_ወደ ኤፌሶን ሰዎች.json',
   
      'number': '6',
      'abbrev': 'EPH'
    },
    {
      'title': 'Philippians',
      'anywaa': 'Pilipay',
      'amharic': '50_ወደ ፊልጵስዩስ ሰዎች.json',

      'number': '4',
      'abbrev': 'PHP'
    },
    {
      'title': 'Colossians',
      'anywaa': 'Köløcia',
      'amharic': '51_ወደ ቆላስይስ ሰዎች.json',
   
      'number': '4',
      'abbrev': 'COL'
    },
    {
      'title': '1 Thessalonians',
      'anywaa': '1 Thecalönika',
      'amharic': '52_1ኛ ወደ ተሰሎንቄ ሰዎች.json',
      'anywaa': '1TH',
      'number': '5',
      'abbrev': '1TH'
    },
    {
      'title': '2 Thessalonians',
      'anywaa': '2 Thecalönika',
      'amharic': '53_2ኛ ወደ ተሰሎንቄ ሰዎች.json',
    
      'number': '3',
      'abbrev': '2TH'
    },
    {
      'title': '1 Timothy',
      'anywaa': '1 Timöthi',
      'amharic': '54_1ኛ ወደ ጢሞቴዎስ.json',
   
      'number': '6',
      'abbrev': '1TI'
    },
    {
      'title': '2 Timothy',
      'anywaa': '2 Timöthi',
      'amharic': '55_2ኛ ወደ ጢሞቴዎስ.json',
   
      'number': '4',
      'abbrev': '2TI'
    },
    {
      'title': 'Titus',
      'amharic': '56_ወደ ቲቶ.json',
      'anywaa': 'Tayta',
   
      'number': '3',
      'abbrev': 'TIT'
    },
    {
      'title': 'Philemon',
      'amharic': '57_ወደ ፊልሞና.json',
      'anywaa': 'Piliman',

      'number': '1',
      'abbrev': 'PHM'
    },
    {
      'title': 'Hebrews',
      'anywaa': 'Ibaru',
      'amharic': '58_ወደ ዕብራውያን.json',

      'number': '13',
      'abbrev': 'HEB'
    },
    {
      'title': 'James',
      'anywaa': 'Jeemeth',
      'amharic': '59_የያዕቆብ መልእክት.json',
 
      'number': '5',
      'abbrev': 'JAS'
    },
    {
      'title': '1 Peter',
      'anywaa': '1 Piter',
      'amharic': '60_1ኛ የጴጥሮስ መልእክት.json',
  
      'number': '5',
      'abbrev': '1PE'
    },
    {
      'title': '2 Peter',
      'anywaa': '2 Piter',
      'amharic': '61_2ኛ የጴጥሮስ መልእክት.json',
   
      'number': '3',
      'abbrev': '2PE'
    },
    {
      'title': '1 John',
      'anywaa': '1 Jøøn',
      'amharic': '62_1ኛ የዮሐንስ መልእክት.json',

      'number': '5',
      'abbrev': '1JN'
    },
    {
      'title': '2 John',
      'anywaa': '2 Jøøn',
      'amharic': '63_2ኛ የዮሐንስ መልእክት.json',

      'number': '1',
      'abbrev': '2JN'
    },
    {
      'title': '3 John',
      'anywaa': '3 Jøøn',
      'amharic': '64_3ኛ የዮሐንስ መልእክት.json',

      'number': '1',
      'abbrev': '3JN'
    },
    {
      'title': 'Jude',
      'anywaa': 'Juut',
      'amharic': '65_የይሁዳ መልእክት.json',

      'number': '1',
      'abbrev': 'JUD'
    },
    {
      'title': 'Revelation',
      'anywaa': 'Mana Nyooth',
      'amharic': '66_የዮሐንስ ራእይ.json',
      'number': '22',
      'abbrev': 'REV'
    }
  ];

  const colorList = [
    'bg-red-400/40',    // Light Red
    'bg-pink-400/35',   // Light Pink
    'bg-gray-400/35',   // Gray
    'bg-green-400/40',  // Green
    'bg-purple-500/45', // Purple
    'bg-purple-600/50', // Magenta
    'bg-blue-400/45',   // Blue
    'bg-orange-400/50', // Orange
    'bg-yellow-400/55', // Yellow
    'bg-green-300/35',  // Mint Green
    'bg-purple-300/40', // Light Purple
  ];
  const [bibleData, setBibleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myNumber, setMyNumber] = useState(()=> {
    return parseInt(localStorage.getItem("myNumber")) || 0
  })
  // const [bookSelected, setBookSelected] = useState("")
  const [selectedVersion, setSelectedVersion] = useState(()=> {
    return localStorage.getItem("selectedVersion") || "ANY"
  })
  const [currentTestement, setCurrentTestement] = useState(()=> {
    return localStorage.getItem("currentTestement") || "OT"
  })
  const [currentBook, setCurrentbook] = useState(()=> {
    return localStorage.getItem("currentBook") || "GEN"
  })
  const [currentVersion, setCurrentVersion] = useState(()=> {
    return localStorage.getItem("currentVersion") || "ANY"
  })
  const [bookNumber, setBookNumber] = useState(()=> {
    return parseInt(localStorage.getItem("bookNumber")) || 0
  })
  const [dialog, setDialog] = useState(false)
  const [verseList, setVerseList] = useState([])
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [textColor, setTextColor] = useState([])
  const [pageIndex, setPageIndex] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
const [textList, setTextList] = useState([]);
const [showToast, setShowToast] = useState(false);
const [verseNumb, setVerseNumb] = useState(0);
  const togglePopup = () => {
      setShowPopup(true);
      setTimeout(()=>{
        setShowPopup(false);
      }, 4000)
  };

  const [itemCount, setItemCount] = useState([])
  const backendUrl = process.env.REACT_APP_API_URL;
  console.log(backendUrl);
  const {user} = useAuthContext()
  const handleAdd = () => {
    if(currentVersion === "AMH"){
      if ( myNumber < bibleData?.chapters.length - 1) {
        setMyNumber(myNumber + 1); // Go to next chapter
        localStorage.setItem("myNumber", myNumber + 1)
      }
    }
     else {
      if (myNumber < bibleData?.text.length - 1) {
        setMyNumber(myNumber + 1); // Go to next chapter
        localStorage.setItem("myNumber", myNumber + 1)
      }

     }
   
  };

  // Decrement the chapter number to go to the previous chapter
  const handleSub = () => {
    if (myNumber > 0) {
      setMyNumber(myNumber - 1); // Go to previous chapter
      localStorage.setItem("myNumber", myNumber - 1)
    }
  };

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
          console.log(data[0].highlights);
          setTextColor(data[0].highlights);
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }

const copyText = ()=> {

  const text = "hello"; // Text to copy

  let myBook=''
    let wholeBookmark = ''
    let wholeverseNumber = ''
    let verseId = ''

      if(currentVersion === 'ANY'){
        myBook = bookList[bookNumber].anywaa

      } else if(currentVersion === 'AMH'){
        myBook =  bookList[bookNumber].amharic.split('_')[1].split('.')[0]
      } else {
        myBook =  bookList[bookNumber].title
      }

    if(textList.length === 1){
      wholeBookmark = textList[0].verse
      wholeverseNumber = textList[0].id.split('.')[2]
      // verseId = textList[0].id.split('.')[2]
      
    } else if(textList.length > 1){
      textList.map((text)=> {
        wholeBookmark += `${text.verse} `
        wholeverseNumber += `${text.id.split('.')[2]},  `
      })
    }

    // const bookmarkData = {verse: wholeBookmark, book: `${myBook} ${verseList[0].split('.')[1]}: ${wholeverseNumber} `, version: currentVersion}
    const textTobeCopied = `${myBook} ${verseList[0].split('.')[1]}: ${wholeverseNumber} \n ${wholeBookmark}`

  navigator.clipboard.writeText(textTobeCopied)
      .then(() => {
       
          setTextList([])
         setShowToast(true);
         setTimeout(()=>{
            setShowToast(false);
         }, 2000)
      })
      .catch((err) => {
          console.error("Failed to copy text: ", err);
      });

}

const share = () => {
     let myBook=''
    let wholeBookmark = ''
    let wholeverseNumber = ''
    let verseId = ''

  
      if(currentVersion === 'ANY'){
        myBook = bookList[bookNumber].anywaa

      } else if(currentVersion === 'AMH'){
        myBook =  bookList[bookNumber].amharic.split('_')[1].split('.')[0]
      } else {
        myBook =  bookList[bookNumber].title
      }

   

    if(textList.length === 1){
      wholeBookmark = textList[0].verse
      wholeverseNumber = textList[0].id.split('.')[2]
      // verseId = textList[0].id.split('.')[2]
      

    } else if(textList.length > 1){
      textList.map((text)=> {
        wholeBookmark += `${text.verse} `
        wholeverseNumber += `${text.id.split('.')[2]},  `

      })



    }


    const shareData = {verse: wholeBookmark, book: `${myBook} ${verseList[0].split('.')[1]}: ${wholeverseNumber} `, version: currentVersion}

  if (navigator.share) {
    navigator
      .share({
        title:  `${shareData.verse} \n ${shareData.version}` , 
        text: ` ${shareData.version} \n ${shareData.book} \n ${shareData.verse}`,            

      })
      .then(() => console.log("Verse shared successfully"))
      .catch((err) => console.error("Error sharing:", err));
  } else {
    // Fallback for browsers that don't support Web Share API
    alert("Sharing is not supported on this browser.");
  }
};


  const fetchData = (testement, book )=> {
    // let version = localStorage.getItem('selectedVersion')
    let version = selectedVersion
    // let version = 'ANY'
    let path = ""
    const myNumb = localStorage.getItem('bookNumber');
    if(version === "ANY"){
    
      path = `${backendUrl}/api/any/${testement}/${book}`
    }else if(version === "AMH"){
      path = `${backendUrl}/api/amh/${bookList[myNumb].amharic}`
        // path = `/api/amh/${bookList[myNumb].amharic}`
    } else{
      path = `${backendUrl}/api/eng/${testement}/${book}/${currentVersion}`
    }
    setLoading(true)
    
 
    // Fetch data from the backend API
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching Bible data');
            }
            return response.json();
        })
        .then(data => {
            setBibleData(data)
        
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
  }

  useEffect(() => {
    fetchData(currentTestement, currentBook, currentVersion);

}, []);

useEffect(() => {
  fetchDatabase(); 
}, [
  user
  //  textColor

]);

if (loading) {
  return  ( <div className="w-full h-screen flex items-center justify-center">
  <PulseLoader color="#eba20c" size={10} />
</div>);
}

if (error) {
  return <div>Error: {error}</div>;
}

const handleSelectBook= (e)=> {
  console.log(e.target.key)
  const key  = parseInt(e.target.value.split('_')[0],10) - 1
  const value = e.target.value.split('_')[1]
  setBookNumber(key)
  localStorage.setItem('bookNumber',key)
  const itemCount = parseInt(bookList[key].number)
  const items =  Array.from({ length:itemCount }, (_, i) => i + 1);
  setItemCount(items)
  showDialog(key)
  console.log(value)
  setCurrentbook(value)
  localStorage.setItem("currentBook", value)
 
}
const handleSelectedVersion= (e)=> {

  console.log("inside")
  console.log(e.target.value)
  setSelectedVersion(e.target.value)
  localStorage.setItem("selectedVersion", e.target.value)
  setCurrentVersion(e.target.value)
  localStorage.setItem("selectedVersion", e.target.value)


  let nowBook = ""

  if(e.target.value === "AMH") {
    nowBook = bookList[bookNumber].amharic.split(".")[0]
    console.log(nowBook)
    setCurrentbook(nowBook)
    localStorage.setItem("currentBook", nowBook)
    fetchData(currentTestement, nowBook, e.target.value)
  }  else {
    nowBook = bookList[bookNumber].abbrev
    setCurrentbook(nowBook)
    localStorage.setItem("currentBook", nowBook)
    fetchData(currentTestement, nowBook, e.target.value)
  }


}

const handleNumber = (number)=>{
  setMyNumber(number - 1)
  localStorage.setItem("myNumber", number - 1)
  // setBookSelected(bookList[bookNumber].title)
  
  let myTestement = ""
  if(bookNumber < 39) {
    setCurrentTestement("OT")
    localStorage.setItem("currentTestement", "OT")
    myTestement = "OT"
  } else {
    setCurrentTestement("NT")
    localStorage.setItem("currentTestement", "NT")
    myTestement = "NT"
  }
  // fetch for amharic
  if(currentVersion === "AMH"){
    fetchData(myTestement, currentBook, currentVersion)
  }else {
    fetchData(myTestement,currentBook, currentVersion)
  }

  
  console.log(`the current book is ${bookList[bookNumber].title}`)
  console.log(currentBook)
  setDialog(false)

}


const showDialog = ()=> {
 setDialog(true)
}

const handleDialog = ()=> {
  setDialog(false)
}

const handleVerseClick = (id, text, verseNumb) => {
  if (verseList.includes(id)) {
    const updatedVerselist = verseList.filter(item => item !== id);
    setVerseList(updatedVerselist);
  } else {
    setVerseList([...verseList, id]);
    setTextList([...textList, {verse: text, id: id}]);

  }
  setIsBottomSheetOpen(true);

  // console.log( myNumber)
  setVerseNumb(verseNumb)
  
};


const handTextColor = async (colorIndex) => {
  if (user) {
    const verseColor = verseList.map((id) => (
      {
      verseId: id,
      color: parseInt(colorIndex,10)
  }));


      // const data = { color: colorIndex, verse_id: verseId }; // Match server expectations
verseColor.map(async(verse)=> {
  
  try {
    setTextColor((prevTextColor) => [...prevTextColor, ...verseColor]);
    console.log(verse);
      const response = await fetch(`${backendUrl}/api/data/highlight`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(verse),
      });
   
      const json = await response.json(); // Await the JSON parsing
      if (response.ok) {
      } 
  } catch (error) {
      console.error('Request failed:', error); // Handle fetch errors
  }
})
  }
  else{
    console.log("User not logged in")
    togglePopup()
    console.log(showPopup)
  }
};


const hideDialog = ()=> {
  setVerseList([])
  setTextList([])
}

const handlePageIndex = (index)=>{
  setPageIndex(index)
}

const handleBookMark = async () => {
  if(user){
    let myBook=''
    let wholeBookmark = ''
    let wholeverseNumber = ''
    let verseId = ''

  
      if(currentVersion === 'ANY'){
        myBook = bookList[bookNumber].anywaa

      } else if(currentVersion === 'AMH'){
        myBook =  bookList[bookNumber].amharic.split('_')[1].split('.')[0]
      } else {
        myBook =  bookList[bookNumber].title
      }

   

    if(textList.length === 1){
      wholeBookmark = textList[0].verse
      wholeverseNumber = textList[0].id.split('.')[2]
      // verseId = textList[0].id.split('.')[2]
      

    } else if(textList.length > 1){
      textList.map((text)=> {
        wholeBookmark += `${text.verse} `
        wholeverseNumber += `${text.id.split('.')[2]},  `

      })



    }


    const bookmarkData = {verse: wholeBookmark, book: `${myBook} ${verseList[0].split('.')[1]}: ${wholeverseNumber} `, version: currentVersion}
    console.log(bookmarkData)
    setTextList([])
  try {

      const response = await fetch(`${backendUrl}/api/data/bookmark`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(bookmarkData),
      });
   
      const json = await response.json(); // Await the JSON parsing
      if (response.ok) {
        console.log('Bookmark saved successfully')
      } 

 } catch (error) {
     console.error('Request failed:', error); // Handle fetch errors
 }
    
  }
}

const handleRemoveHighlight= async()=> {
  console.log(verseList)
if(user){
    
  try {
    verseList.map(async(verse)=> {
    const color = textColor.filter(item => item.verseId !== verse);
    setTextColor(color)
     const response = await fetch(`${backendUrl}/api/data/highlight/${verse}`, {
       method: 'DELETE',
       headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${user.token}`
       },
       body: JSON.stringify({verseId: verse})
   });

   const json = await response.json(); // Await the JSON parsing
   if (response.ok) {
 
   
       
   } 
    })
 } catch (error) {
     console.error('Request failed:', error); // Handle fetch errors
 }
// })
}else{
  togglePopup()
}
}

    return (
<div className=" lg:w-[70%] md:w-[80%] flex flex-col  w-full items-center mx-6">
    <div className="fixed dark:bg-slate-900  bg-white w-full md:w-[40%] ">
    <Header/>
   <div>
<div className="flex mx-4 md:mx-0 justify-between gap-2 items-center p-2 dark:bg-slate-900 bg-gray-100 rounded-lg shadow-md">
  <select 
    onChange={handleSelectBook} 
    value={`${bookNumber + 1}_${currentBook}`} 
    className="md:w-[50%] px-3 py-2 border border-gray-300 rounded-md dark:bg-slate-900 dark:text-white bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    {bookList.map((book) => {
      const key = parseInt(book.amharic.split('_')[0], 10);
      // console.log(key)

      if (currentVersion === "ANY") {

        // setBookName(book.anywaa)
      
          return (
            <option key={key} value={`${key}_${book.abbrev}`}>
              {book.anywaa}
            </option>
          );
      
      } else if (currentVersion === "AMH") {
        // setBookName(book.amharic.split('_')[1].split('.')[0])
        return (
          <option key={key} value={book.amharic}>
            {book.amharic.split('_')[1].split('.')[0]}
          </option>
        );
      } else {
        // setBookName(book.title)
        return (
          <option key={key} value={`${key}_${book.abbrev}`}>
            {book.title}
          </option>
        );
      }
    })}
  </select>

  <select 
    value={selectedVersion} 
    onChange={handleSelectedVersion} 
    className=" md:w-[50%] w-[50%] px-3 py-2 border border-gray-300 rounded-md dark:text-white dark:bg-slate-900 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    <option key="KJV" value="KJV">King James Version</option>
    <option key="ESV" value="ESV">English Standard Version</option>
    <option key="ERV" value="ERV">Easy-to-read Version</option>
    <option key="ANY" value="ANY">Dha Anywaa</option>
    <option key="AMH" value="AMH">Amharic</option>
    <option key="WEB" value="WEB">World English Bible</option>
    <option key="AMP" value="AMP">Amplified Version</option>
    <option key="ASV" value="ASV">American Standard Version</option>
    <option key="CPDV" value="CPDV">Catholic Public Domain Version</option>
    <option key="NASB" value="NASB">New American Standard Bible</option>
  </select>
</div>


{
  dialog && <div className=" w-[75%] z-50 dark:bg-slate-900 bg-slate-100 absolute p-2 shadow-lg rounded-md overflow-auto max-h-[80vh]">
    <div className="w-full flex h-10 dark:text-white text-gray-400 justify-between items-center">
      <div></div>
      <h2>CHAPTER</h2>
      <button onClick={handleDialog}>CANCEL</button>
    </div>

    <div>
      {console.log(itemCount.length)}
      <div className="grid grid-cols-5 gap-1  w-full ">
        {itemCount.map((number)=> {
          return (
            <div onClick={() =>handleNumber(number)} key={number} className="p-2 text-lg dark:text-gray-200 text-gray-600 dark:bg-slate-800 bg-white rounded-md hover:bg-gray-100">
              {number}
            </div>
          )
        })}
      </div>
    </div>

  </div>
}
   </div>
   {(currentVersion === "ANY" && currentTestement === "NT" && bibleData?.text[myNumber]?.audioLink) && (
  <div key={ bibleData?.text[myNumber]?.audioLink} className="flex justify-center  pt-2 ">
    <audio

      className="mt-5 md:block hidden"
      controls
      ref={(audioElement) => {
        if (audioElement) {
          audioElement.load();
        }
      }}
    >
      <source
        src={bibleData?.text[myNumber]?.audioLink}
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>

    
      
    
   
  </div>
)}



{ showToast &&  <div className="bottom-52 text-2xl left-[37%] text-gray-800  bg-white dark:bg-slate-900  md:left-[50%] fixed">Text copied!</div>}

{
  showPopup && <div className="relative">
  <div
         className={` fixed top-20 right-5 transform -translate-y-1/2  bg-white shadow-lg p-6 w-64 
          rounded-lg transition-transform duration-700 ${
              showPopup ? 'translate-x-0' : 'translate-x-full'
          }`}
  >
    
      <p className="text-gray-600 ">Sign in to highlight your texts.</p>
   
  </div>
</div>
}

    </div>
    
 <div onClick={handleSub} className="fixed dark:bg-slate-800 bg-slate-100 p-2 rounded-full hidden md:block lg:left-56 md:left-32  left-56 top-1/2 transform -translate-y-1/2">
  <IoIosArrowBack key="handleSub" size={40} />
</div>
<div className= "md:pt-56 pt-36  md:w-[60%] md:text-lg lg:w-[55%] sm:w-[70%] mt-5 md:tracking-wide leading-7 md:leading-9  p-5 shadow-sm">
{/* {console.log(bibleData?.chapters[myNumber]?.verses)} */}
{console.log(currentVersion)}
{ 
      localStorage.getItem('selectedVersion') === "AMH"?  bibleData?.chapters[myNumber]?.verses.map((section, index)=> {
        return (
          <div>
            {index ===0 && <div className="flex gap-2 justify-center font-extrabold text-2xl pb-5">
            <h1>{bibleData?.title}</h1>
            <h1>{bibleData?.chapters[myNumber]?.chapter}</h1>
            </div>}
           {section && <div className="flex gap-2 items-start" key={index}>
            <p className="text-gray-500">{index + 1}</p>
           <p>{section}</p>
           </div>}
          </div>

        )
      })  :  
  bibleData.text[myNumber]?.text.map((section, index) => {
    const colorItem = textColor.find((item) => item.verseId === `${bibleData.text[myNumber].ID}.${section.ID}`);
    const bgColor = colorItem ? colorList[colorItem.color] : null;

  
    return (
      <div>
         {(index ===0 && bibleData?.text[myNumber].name )&&   <h2 className="text-3xl font-bold ">{currentVersion === 'ANY'? bookList[bookNumber].anywaa : bookList[bookNumber].title}</h2>}
            {index ===0 && <h2 className="font-semibold text-start py-2">{bibleData?.text[myNumber].title}</h2>}
            {section.title && <h2 className="font-semibold  py-2 text-center">{section.title}</h2>}
            {section.reference && <h3 className="text-gray-500 italic">{section.reference}</h3>}
           { section.text &&
             <div className="flex gap-2 items-start" key={section.ID}>

             {/* Display section ID and section text */}
            

            {
             
            index ===0? <h2 className="text-4xl md:text-6xl font-bold text-orange-400">{parseInt(myNumber) + 1}</h2> : <p className="text-gray-500">{section.ID}</p> }

            
<p
  className={
    verseList.includes(`${bibleData.text[myNumber].ID}.${section.ID}`)
      ? bgColor
        ? `${bgColor}`
        : "underline decoration-dotted decoration-gray-500 underline-offset-4"
      : bgColor? `${bgColor}`: ""
  }
  onClick={() => handleVerseClick(`${bibleData.text[myNumber].ID}.${section.ID}`, section.text, section.ID)}
>
  {section.text}
</p>
                {
                  // console.log(textColor)
                  textColor.find((item) => item.id === `${bibleData.text[myNumber].ID}.${section.ID}`) &&
                  console.log(`the is ${bgColor}`)
                // textColor.find((item)=> item.id === `${bibleData.text[myNumber].ID}.${section.ID}` )
                }


             </div>
             }

           {section.comments && <div className="text-gray-500 italic">
            {section.comments}
            </div>}

           {section.comment && <div className="text-gray-500 italic">
            {section.comment}
            </div>}
           
      </div>
   
    );
  }) 
}


{/* list.text[0].text.map((book)=> {
    console.log(book.text)
}) */}



</div>
<div onClick={handleAdd} className="fixed dark:bg-slate-800 bg-slate-100 p-2 rounded-full hidden md:block lg:right-56 md:right-32 top-1/2 transform -translate-y-1/2">
  <IoIosArrowForward key="handleAdd" size={40} />
</div>

<div className = "md:hidden flex dark:bg-slate-900 z-50 bg-slate-50 bottom-0 flex-col fixed   h-[110px] w-[100%] items-center justify-between pl-5 pr-5">
            <div className="md:hidden flex dark:bg-slate-900 bg-slate-50 bottom-0  h-16 w-[100%] items-center justify-between pt-1 ">
            <div onClick={handleSub}>
            <IoIosArrowBack size={35} />
            </div>
        <div className="">
        { (currentVersion === "ANY" && currentTestement === "NT" && bibleData?.text[myNumber]?.audioLink) && <audio
      className=""
      controls
      ref={(audioElement) => {
        if (audioElement) {
          audioElement.load();
        }
      }}
    >
      <source
        src={bibleData?.text[myNumber]?.audioLink}
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
      </audio>}
        </div>
            <div className="" onClick={handleAdd}>
            <IoIosArrowForward  size={35} />
            </div>
            </div>

            <div className="flex justify-between w-full px-5 pb-5">
             <NavLink to='/dailyText'>
             <div onClick={()=> handlePageIndex(0)} className={pageIndex === 0? 'text-orange-400 flex items-center flex-col':'flex items-center flex-col'}>
              <RiHome6Line size={25} />
              <p>Today</p>
              </div>
             </NavLink>
              <NavLink to='/'>
              <div onClick={()=> handlePageIndex(1)} className={pageIndex === 1? 'text-orange-400 flex items-center flex-col':'flex items-center flex-col'}>
              <MdOutlineMenuBook size={25} />
              <p>Book</p>
              </div>
              </NavLink>
             <NavLink to='/bookMark'>
             <div onClick={()=> handlePageIndex(2)} className={pageIndex === 2? 'text-orange-400 flex items-center flex-col':'flex items-center flex-col'}>
              <PiBookmarksSimpleFill size={25}/>
              <p>Bookmark</p>
              </div>
             </NavLink>

            </div>
            
            
        </div>


        {verseList.length > 0 && <div className={`fixed md:w-[38%]  md:left-96 md:ml-5  inset-x-0 bottom-0 dark:bg-slate-900 bg-white shadow-lg p-4 rounded-t-lg z-50
                transform transition-transform duration-500 ease-in-out`}
    style={{ minHeight: "20vh", transform: isBottomSheetOpen ? "translateY(0)" : "translateY(100%)" }}>
         <div className="flex justify-between ">

         <div className="flex justify-between  w-[60%] items-center">
            <div onClick={handleBookMark}><MdOutlineBookmarkAdd size={35} /></div>
            <div onClick={copyText}><FaRegCopy size={28} /></div>
            <div onClick={share}><FaShareNodes size={28} /></div>
            <Link to={'/versecompare'} state={{verseNumb: verseNumb, myNumber: myNumber}}>
            <div><TfiViewListAlt size={28} /></div>
            </Link>
          </div>
          <div>
          <MdOutlineCancel onClick={hideDialog}  size={28}/>
          </div>
         </div>

         <div className="flex items-center justify-start mt-3 gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
          <div onClick={()=>handleRemoveHighlight()} className="text-gray-500 shrink-0">
          <MdCancel size={45} />
          </div>
  {colorList.map((color, index) => (
    <div onClick={()=> handTextColor(index)}
      key={index}
      className={`${color} h-10 w-10 rounded-full shrink-0`}
    ></div>
  ))}
</div>
        </div>}
</div>  
    )
}

export default HomePage