// import Header from "../components/Header";
// import { useEffect, useState } from "react";


// const VerseCompare= ()=> {
//     const [currentVersion, setCurrentVersion] = useState(()=> {
//         return localStorage.getItem("currentVersion") || "ANY"
//       })

//       const [currentTestement, setCurrentTestement] = useState(()=> {
//         return localStorage.getItem("currentTestement") || "OT"
//       })

//       const [bibleData, setBibleData] = useState(null)
//       const [bibleData2, setBibleData2] = useState(null)
//       const [loading, setLoading] = useState(true)


//       const [bookNumber, setBookNumber] = useState(0)
//       const [error, setError] = useState(null)
//       const [selectedVersion, setSelectedVersion] = useState('')
//       const [currentBook, setCurrentBook] = useState('')
//       const [firstLanguage, setFirstLanguage] = useState('')
//       const [secondLanguage, setSecondLanguage] = useState('')
//       const [myNumber, setMyNumber] = useState(0)
//       const [dialog, setDialog] = useState(false)
//       const [itemCount, setItemCount] = useState([])

//       useEffect(()=> {

//       }, )



//     const bookList = [
//         {
//           'title': 'Genesis',
//           'amharic': '01_ኦሪት ዘፍጥረት.json',
//           'anywaa': 'Wïlöölö',
//           'number': '50',
//           'abbrev': 'GEN'
//         },
//         {
//           'title': 'Exodus',
//           'amharic': '02_ኦሪት ዘጸአት.json',
//           'anywaa': 'Bwøth Wøk',
//           'number': '40',
//           'abbrev': 'EXO'
//         },
//         {
//           'title': 'Leviticus',
//           'amharic': '03_ኦሪት ዘሌዋውያን.json',
//           'anywaa': 'Ciik Kiper Dïlämme',
//           'number': '27',
//           'abbrev': 'LEV'
//         },
//         {
//           'title': 'Numbers',
//           'amharic': '04_ኦሪት ዘኍልቍ.json',
//           'anywaa': 'Kwään Jiy',
//           'number': '36',
//           'abbrev': 'NUM'
//         },
//         {
//           'title': 'Deuteronomy',
//           'amharic': '05_ኦሪት ዘዳግም.json',
//           'anywaa': 'Tiet Ciik',
//           'number': '34',
//           'abbrev': 'DEU'
//         },
//         {
//           'title': 'Joshua',
//           'amharic': '06_መጽሐፈ ኢያሱ ወልደ ነዌ.json',
//           'anywaa': 'Jøcua',
//           'number': '24',
//           'abbrev': 'JOS'
//         },
//         {
//           'title': "Judges",
//           'amharic': '07_መጽሐፈ መሣፍንት.json',
//           'anywaa': 'Pïëmme',
//           'number': '21',
//           'abbrev': 'JDG'
//         },
//         {
//           'title': "Ruth",
//           'amharic': '08_መጽሐፈ ሩት.json',
//           'anywaa': 'Ruuth',
//           'number': '4',
//           'abbrev': 'RUT'
//         },
//         {
//           'title': "1 Samuel",
//           'amharic': '09_መጽሐፈ ሳሙኤል ቀዳማዊ.json',
//           'anywaa': '1 Camiel',
//           'number': '31',
//           'abbrev': '1SA'
//         },
//         {
//           'title': "2 Samuel",
//           'amharic': '10_መጽሐፈ ሳሙኤል ካል.json',
//           'anywaa': '2 Camiel',
//           'number': '24',
//           'abbrev': '2SA'
//         },
//         {
//           'title': "1 Kings",
//           'amharic': '11_መጽሐፈ ነገሥት ቀዳማዊ.json',
//           'anywaa': '1 Nyeye',
//           'number': '22',
//           'abbrev': '1KI'
//         },
//         {
//           'title': "2 Kings",
//           'amharic': '12_መጽሐፈ ነገሥት ካልዕ.json',
//           'anywaa': '2 Nyeye',
//           'number': '25',
//           'abbrev': '2KI'
//         },
//         {
//           'title': "1 Chronicles",
//           'amharic': '13_መጽሐፈ ዜና መዋዕል ቀዳማዊ.json',
//           'anywaa': '1 Luup Nyeye',
//           'number': '29',
//           'abbrev': '1CH'
//         },
//         {
//           'title': "2 Chronicles",
//           'amharic': '14_መጽሐፈ ዜና መዋዕል ካልዕ.json',
//           'anywaa': '2 Luup Nyeye',
//           'number': '36',
//           'abbrev': '2CH'
//         },
//         {
//           'title': "Ezra",
//           'amharic': '15_መጽሐፈ ዕዝራ.json',
//           'anywaa': 'Edhera',
//           'number': '10',
//           'abbrev': 'EZR'
//         },
//         {
//           'title': "Nehemiah",
//           'amharic': '16_መጽሐፈ ነህምያ.json',
//           'anywaa': 'Neemiya',
//           'number': '13',
//           'abbrev': 'NEH'
//         },
//         {
//           'title': "Esther",
//           'amharic': '17_መጽሐፈ አስቴር.json',
//           'anywaa': 'Acther',
//           'number': '10',
//           'abbrev': 'EST'
//         },
//         {
//           'title': "Job",
//           'amharic': '18_መጽሐፈ ኢዮብ.json',
//           'anywaa': 'Jööp',
//           'number': '42',
//           'abbrev': 'JOB'
//         },
//         {
//           'title': "Psalms",
//           'amharic': '19_መዝሙረ ዳዊት.json',
//           'anywaa': 'Dut Pwøc',
//           'number': '150',
//           'abbrev': 'PSA'
//         },
//         {
//           'title': "Proverbs",
//           'amharic': '20_መጽሐፈ ምሳሌ.json',
//           'anywaa': 'Pwöc Leec Wïc',
//           'number': '31',
//           'abbrev': 'PRO'
//         },
//         {
//           'title': "Ecclesiastes",
//           'amharic': '21_መጽሐፈ መክብብ.json',
//           'anywaa': 'Luup Dïpööy',
//           'number': '12',
//           'abbrev': 'ECC'
//         },
//         {
//           'title': "Song of Solomon",
//           'amharic': '22_መኃልየ መኃልይ ዘሰሎሞን.json',
//           'anywaa': 'Obeec Dudi',
//           'number': '8',
//           'abbrev': 'SNG'
//         },
//         {
//           'title': 'Isaiah',
//           'amharic': '23_ትንቢተ ኢሳይያስ.json',
//           'anywaa': 'Aydheea',
//           'number': '66',
//           'abbrev': 'ISA'
//         },
//         {
//           'title': 'Jeremiah',
//           'amharic': '24_ትንቢተ ኤርምያስ.json',
//           'anywaa': 'Jeremaya',
//           'number': '52',
//           'abbrev': 'JER'
//         },
//         {
//           'title': 'Lamentations',
//           'amharic': '25_ሰቆቃው ኤርምያስ.json',
//           'anywaa': 'Wëël Kïmmö',
//           'number': '5',
//           'abbrev': 'LAM'
//         },
//         {
//           'title': 'Ezekiel',
//           'amharic': '26_ትንቢተ ሕዝቅኤል.json',
//           'anywaa': 'Edhikiel',
//           'number': '48',
//           'abbrev': 'EZK'
//         },
//         {
//           'title': 'Daniel',
//           'amharic': '27_ትንቢተ ዳንኤል.json',
//           'anywaa': 'Daniel',
//           'number': '12',
//           'abbrev': 'DAN'
//         },
//         {
//           'title': 'Hosea',
//           'amharic': '28_ትንቢተ ሆሴዕ.json',
//           'anywaa': 'Odheea',
//           'number': '14',
//           'abbrev': 'HOS'
//         },
//         {
//           'title': 'Joel',
//           'amharic': '29_ትንቢተ ኢዮኤል.json',
//           'anywaa': 'Jool',
//           'number': '3',
//           'abbrev': 'JOL'
//         },
//         {
//           'title': 'Amos',
//           'amharic': '30_ትንቢተ አሞጽ.json',
//           'anywaa': 'Amøc',
//           'number': '9',
//           'abbrev': 'AMO'
//         },
//         {
//           'title': 'Obadiah',
//           'amharic': '31_ትንቢተ አብድዩ.json',
//           'anywaa': 'Obadiya',
//           'number': '1',
//           'abbrev': 'OBA'
//         },
//         {
//           'title': 'Jonah',
//           'amharic': '32_ትንቢተ ዮናስ.json',
//           'anywaa': 'Joona',
//           'number': '4',
//           'abbrev': 'JON'
//         },
//         {
//           'title': 'Micah',
//           'amharic': '33_ትንቢተ ሚክያስ.json',
//           'anywaa': 'Mikiya',
//           'number': '7',
//           'abbrev': 'MIC'
//         },
//         {
//           'title': 'Nahum',
//           'amharic': '34_ትንቢተ ናሆም.json',
//           'anywaa': 'Neeyam',
//           'number': '3',
//           'abbrev': 'NAH'
//         },
//         {
//           'title': 'Habakkuk',
//           'amharic': '35_ትንቢተ ዕንባቆም.json',
//           'anywaa': 'Abakuk',
//           'number': '3',
//           'abbrev': 'HAB'
//         },
//         {
//           'title': 'Zephaniah',
//           'amharic': '36_ትንቢተ ሶፎንያስ.json',
//           'anywaa': 'Jepaniya',
//           'number': '3',
//           'abbrev': 'ZEP'
//         },
//         {
//           'title': 'Haggai',
//           'amharic': '37_ትንቢተ ሐጌ.json',
//           'anywaa': 'Agëë',
//           'number': '2',
//           'abbrev': 'HAG'
//         },
//         {
//           'title': 'Zechariah',
//           'amharic': '38_ትንቢተ ዘካርያስ.json',
//           'anywaa': 'Dhekaraya',
//           'number': '14',
//           'abbrev': 'ZEC'
//         },
//         {
//           'title': 'Malachi',
//           'amharic': '39_ትንቢተ ሚልክያ.json',
//           'anywaa': 'Milkiya',
//           'number': '4',
//           'abbrev': 'MAL'
//         },
//         {
//           'title': 'Matthew',
//           'anywaa': 'Mathiew',
//           'amharic': '40_የማቴዎስ ወንጌል.json',
    
//           'number': '28',
//           'abbrev': 'MAT'
//         },
//         {
//           'title': 'Mark',
//           'anywaa': 'Maak',
//           'amharic': '41_የማርቆስ ወንጌል.json',
     
//           'number': '16',
//           'abbrev': 'MRK'
//         },
//         {
//           'title': 'Luke',
//           'anywaa': 'Luk',
//           'amharic': '42_የሉቃስ ወንጌል.json',
    
//           'number': '24',
//           'abbrev': 'LUK'
//         },
//         {
//           'title': 'John',
//           'anywaa': 'Jøøn',
//           'amharic': '43_የዮሐንስ ወንጌል.json',
     
//           'number': '21',
//           'abbrev': 'JHN'
//         },
//         {
//           'title': 'Acts',
//           'anywaa': 'Moa Tïïc Nyïïatwieli',
//           'amharic': '44_የሐዋርያት ሥራ.json',
     
//           'number': '28',
//           'abbrev': 'ACT'
//         },
//         {
//           'title': 'Romans',
//           'anywaa': 'Röm',
//           'amharic': '45_ወደ ሮሜ ሰዎች.json',
       
//           'number': '16',
//           'abbrev': 'ROM'
//         },
//         {
//           'title': '1 Corinthians',
//           'anywaa': '1 Körin',
//           'amharic': '46_1ኛ ወደ ቆሮንቶስ ሰዎች.json',
    
//           'number': '16',
//           'abbrev': '1CO'
//         },
//         {
//           'title': '2 Corinthians',
//           'anywaa': '2 Körin',
//           'amharic': '47_2ኛ ወደ ቆሮንቶስ ሰዎች.json',
      
//           'number': '13',
//           'abbrev': '2CO'
//         },
//         {
//           'title': 'Galatians',
//           'anywaa': 'Galeecia',
//           'amharic': '48_ወደ ገላትያ ሰዎች.json',
    
//           'number': '6',
//           'abbrev': 'GAL'
//         },
//         {
//           'title': 'Ephesians',
//           'anywaa': 'Epeca',
//           'amharic': '49_ወደ ኤፌሶን ሰዎች.json',
       
//           'number': '6',
//           'abbrev': 'EPH'
//         },
//         {
//           'title': 'Philippians',
//           'anywaa': 'Pilipay',
//           'amharic': '50_ወደ ፊልጵስዩስ ሰዎች.json',
    
//           'number': '4',
//           'abbrev': 'PHP'
//         },
//         {
//           'title': 'Colossians',
//           'anywaa': 'Köløcia',
//           'amharic': '51_ወደ ቆላስይስ ሰዎች.json',
       
//           'number': '4',
//           'abbrev': 'COL'
//         },
//         {
//           'title': '1 Thessalonians',
//           'anywaa': '1 Thecalönika',
//           'amharic': '52_1ኛ ወደ ተሰሎንቄ ሰዎች.json',
//           'anywaa': '1TH',
//           'number': '5',
//           'abbrev': '1TH'
//         },
//         {
//           'title': '2 Thessalonians',
//           'anywaa': '2 Thecalönika',
//           'amharic': '53_2ኛ ወደ ተሰሎንቄ ሰዎች.json',
        
//           'number': '3',
//           'abbrev': '2TH'
//         },
//         {
//           'title': '1 Timothy',
//           'anywaa': '1 Timöthi',
//           'amharic': '54_1ኛ ወደ ጢሞቴዎስ.json',
       
//           'number': '6',
//           'abbrev': '1TI'
//         },
//         {
//           'title': '2 Timothy',
//           'anywaa': '2 Timöthi',
//           'amharic': '55_2ኛ ወደ ጢሞቴዎስ.json',
       
//           'number': '4',
//           'abbrev': '2TI'
//         },
//         {
//           'title': 'Titus',
//           'amharic': '56_ወደ ቲቶ.json',
//           'anywaa': 'Tayta',
       
//           'number': '3',
//           'abbrev': 'TIT'
//         },
//         {
//           'title': 'Philemon',
//           'amharic': '57_ወደ ፊልሞና.json',
//           'anywaa': 'Piliman',
    
//           'number': '1',
//           'abbrev': 'PHM'
//         },
//         {
//           'title': 'Hebrews',
//           'anywaa': 'Ibaru',
//           'amharic': '58_ወደ ዕብራውያን.json',
    
//           'number': '13',
//           'abbrev': 'HEB'
//         },
//         {
//           'title': 'James',
//           'anywaa': 'Jeemeth',
//           'amharic': '59_የያዕቆብ መልእክት.json',
     
//           'number': '5',
//           'abbrev': 'JAS'
//         },
//         {
//           'title': '1 Peter',
//           'anywaa': '1 Piter',
//           'amharic': '60_1ኛ የጴጥሮስ መልእክት.json',
      
//           'number': '5',
//           'abbrev': '1PE'
//         },
//         {
//           'title': '2 Peter',
//           'anywaa': '2 Piter',
//           'amharic': '61_2ኛ የጴጥሮስ መልእክት.json',
       
//           'number': '3',
//           'abbrev': '2PE'
//         },
//         {
//           'title': '1 John',
//           'anywaa': '1 Jøøn',
//           'amharic': '62_1ኛ የዮሐንስ መልእክት.json',
    
//           'number': '5',
//           'abbrev': '1JN'
//         },
//         {
//           'title': '2 John',
//           'anywaa': '2 Jøøn',
//           'amharic': '63_2ኛ የዮሐንስ መልእክት.json',
    
//           'number': '1',
//           'abbrev': '2JN'
//         },
//         {
//           'title': '3 John',
//           'anywaa': '3 Jøøn',
//           'amharic': '64_3ኛ የዮሐንስ መልእክት.json',
    
//           'number': '1',
//           'abbrev': '3JN'
//         },
//         {
//           'title': 'Jude',
//           'anywaa': 'Juut',
//           'amharic': '65_የይሁዳ መልእክት.json',
    
//           'number': '1',
//           'abbrev': 'JUD'
//         },
//         {
//           'title': 'Revelation',
//           'anywaa': 'Mana Nyooth',
//           'amharic': '66_የዮሐንስ ራእይ.json',
//           'number': '22',
//           'abbrev': 'REV'
//         }
//       ];


//       const handleNumber = (number)=>{
//         setMyNumber(number - 1)
//         // localStorage.setItem("myNumber", number - 1)
//         // setBookSelected(bookList[bookNumber].title)
        
//         let myTestement = ""
//         if(bookNumber < 39) {
//           // setCurrentTestement("OT")
//           // localStorage.setItem("currentTestement", "OT")
//           // myTestement = "OT"
//         } else {
//           // setCurrentTestement("NT")
//           // localStorage.setItem("currentTestement", "NT")
//           // myTestement = "NT"
//         }
//         // // fetch for amharic
//         // if(currentVersion === "AMH"){
//         //   fetchData(myTestement, currentBook, currentVersion)
//         // }else {
//         //   fetchData(myTestement,currentBook, currentVersion)
//         // }
      
        
//         console.log(`the current book is ${bookList[bookNumber].title}`)
//         console.log(currentBook)
//         setDialog(false)
      
//       }

//       const handleDialog = ()=> {
//         setDialog(false)
//       }
//     //   const [selectedVersion, setSelectedVersion] = useState(()=> {
//     //     return localStorage.getItem("selectedVersion") || "ANY"
//     //   })


//     const handleSelectedVersion= (e)=> {
//       setFirstLanguage(e.target.value)

//         let nowBook = ""
//         if(e.target.value === "AMH") {
//           nowBook = bookList[bookNumber].amharic.split(".")[0]
//           fetchData(currentTestement, nowBook, e.target.value)
//         }  else if(e.target.value === "ANY") {
//           nowBook = bookList[bookNumber].abbrev
//           fetchData(currentTestement, nowBook, e.target.value)
//         } else{
//             nowBook = bookList[bookNumber].abbrev
//             fetchData(currentTestement, nowBook, e.target.value)
//           }
        
      
      
//       }

//     const handleSelectedVersion2= (e)=> {
//       setSecondLanguage(e.target.value)

//         let nowBook = ""
//         if(e.target.value === "AMH") {
//           nowBook = bookList[bookNumber].amharic.split(".")[0]
//           fetchData(currentTestement, nowBook, e.target.value)
//         }  else {
//           nowBook = bookList[bookNumber].abbrev
//           fetchData(currentTestement, nowBook, e.target.value)
//         }
    
//       }

//       const handleSelectBook= (e)=> {
//         console.log(e.target.key)
//         const key  = parseInt(e.target.value.split('_')[0],10) - 1
//         const value = e.target.value.split('_')[1]
//         if(key > 39) {
//            setCurrentTestement('NT')
           
//         }else {
//           setCurrentTestement('OT')
//         }
//         setBookNumber(key)
//         console.log(value)
//         console.log(key)
    
//       }


    
//   const fetchData = (testement, book, version, numb)=> {
//     let path = ""
//     if(version === "ANY"){
//       path = `/api/any/${testement}/${book}`
//     }else if(version === "AMH"){
//       path = `/api/amh/${book}`
//     } else{
//       path = `/api/eng/${testement}/${book}/${version}`
//     }
 
//     fetch(path)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Error fetching Bible data');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if(numb === 1){
//               setBibleData(data)
//               setLoading(false);
//               console.log(data)
//             }else {
//               setBibleData2(data)
//               setLoading(false);
//               console.log(data)
//             }
//         })
//         .catch(err => {
//             setError(err.message);
//             setLoading(false);
//         });
//   }
//   {console.log('here is the data ',bibleData)}
//     return(

    
//     <div className="w-full h-screen gap-4 lg:w-[70%] md:w-[80%] flex flex-col  items-center mx-6">
//         <Header />

//         <select 
//     onChange={handleSelectBook} 
//     value={`${bookNumber + 1}_${currentBook}`} 
//     className="md:w-[50%] px-3 py-2 border border-gray-300 rounded-md dark:bg-slate-900 dark:text-white bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//   >
//     {bookList.map((book, index) => {
//       const key = parseInt(book.amharic.split('_')[0], 10);
//       // console.log(key)

//       if (currentVersion === "ANY") {

//         // setBookName(book.anywaa)
//       {if(loading){
//        return <div>Loading</div>
//       }}
//           return (
  
//             <option key={key} value={`${key}_${book.abbrev}`}>
//               {book.anywaa}
//             </option>
//           );
      
//       } else if (currentVersion === "AMH") {
//         // setBookName(book.amharic.split('_')[1].split('.')[0])
//         return (
//           <option key={key} value={book.amharic}>
//             {book.amharic.split('_')[1].split('.')[0]}
//           </option>
//         );
//       } else {
//         // setBookName(book.title)
//         return (
//           <option key={key} value={`${key}_${book.abbrev}`}>
//             {book.title}
//           </option>
//         );
//       }
//     })}
//   </select>


//         <div className="w-full h-screen flex justify-between">
//             <div className="w-[50%]">
//             <select 
//                     value={selectedVersion} 
//                     onChange={handleSelectedVersion} 
//                     className=" md:w-[50%] w-[50%] px-3 py-2 border border-gray-300 rounded-md dark:text-white dark:bg-slate-900 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 >
//                     <option key="KJV" value="KJV">King James Version</option>
//                     <option key="ESV" value="ESV">English Standard Version</option>
//                     <option key="ERV" value="ERV">Easy-to-read Version</option>
//                     <option key="ANY" value="ANY">Dha Anywaa</option>
//                     <option key="AMH" value="AMH">Amharic</option>
//                     <option key="WEB" value="WEB">World English Bible</option>
//                     <option key="AMP" value="AMP">Amplified Version</option>
//                     <option key="ASV" value="ASV">American Standard Version</option>
//                     <option key="CPDV" value="CPDV">Catholic Public Domain Version</option>
//                     <option key="NASB" value="NASB">New American Standard Bible</option>
//                 </select>

//                 {
//   dialog && <div className=" w-[75%] z-50 dark:bg-slate-900 bg-slate-100 absolute p-2 shadow-lg rounded-md overflow-auto max-h-[80vh]">
//     <div className="w-full flex h-10 dark:text-white text-gray-400 justify-between items-center">
//       <div></div>
//       <h2>CHAPTER</h2>
//       <button onClick={handleDialog}>CANCEL</button>
//     </div>

//     <div>
//       {console.log(itemCount.length)}
//       <div className="grid grid-cols-5 gap-1  w-full ">
//         {itemCount.map((number)=> {
//           return (
//             <div onClick={() =>handleNumber(number)} key={number} className="p-2 text-lg dark:text-gray-200 text-gray-600 dark:bg-slate-800 bg-white rounded-md hover:bg-gray-100">
//               {number}
//             </div>
//           )
//         })}
//       </div>
//     </div>

//   </div>
// }


//                 { 

//       firstLanguage === "AMH"? bibleData &&  bibleData?.chapters[myNumber]?.verses.map((section, index)=> {
//         return (
//           <div>
//             {index ===0 && <div className="flex gap-2 justify-center font-extrabold text-2xl pb-5">
//             <h1>{bibleData?.title}</h1>
//             <h1>{bibleData?.chapters[myNumber]?.chapter}</h1>
//             </div>}
//            {section && <div className="flex gap-2 items-start" key={index}>
//             <p className="text-gray-500">{index + 1}</p>
//            <p>{section}</p>
//            </div>}
//           </div>

//         )
//       })  :  
//  bibleData && bibleData.text[myNumber]?.text.map((section, index) => {

//     return (
//       <div>
//          {(index ===0 && bibleData?.text[myNumber].name )&&   <h2 className="text-3xl font-bold ">{firstLanguage === 'ANY'? bookList[bookNumber].anywaa : bookList[bookNumber].title}</h2>}
//             {index ===0 && <h2 className="font-semibold text-start py-2">{bibleData?.text[myNumber].title}</h2>}
//             {section.title && <h2 className="font-semibold  py-2 text-center">{section.title}</h2>}
//             {section.reference && <h3 className="text-gray-500 italic">{section.reference}</h3>}
//            { section.text &&
//              <div className="flex gap-2 items-start" key={section.ID}>

            

//             {
             
//             index ===0? <h2 className="text-4xl md:text-6xl font-bold text-orange-400">{parseInt(myNumber) + 1}</h2> : <p className="text-gray-500">{section.ID}</p> }          
// <p


// >
//   {section.text}
// </p>



//              </div>
//              }

//            {section.comments && <div className="text-gray-500 italic">
//             {section.comments}
//             </div>}

//            {section.comment && <div className="text-gray-500 italic">
//             {section.comment}
//             </div>}
           
//       </div>
   
//     );
//   }) 

  
// }
//                 </div>


        
//             <div className="w-[50%]">
//             <select 
//                     value={selectedVersion} 
//                     onChange={handleSelectedVersion2} 
//                     className=" md:w-[50%] w-[50%] px-3 py-2 border border-gray-300 rounded-md dark:text-white dark:bg-slate-900 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 >
//                     <option key="KJV" value="KJV">King James Version</option>
//                     <option key="ESV" value="ESV">English Standard Version</option>
//                     <option key="ERV" value="ERV">Easy-to-read Version</option>
//                     <option key="ANY" value="ANY">Dha Anywaa</option>
//                     <option key="AMH" value="AMH">Amharic</option>
//                     <option key="WEB" value="WEB">World English Bible</option>
//                     <option key="AMP" value="AMP">Amplified Version</option>
//                     <option key="ASV" value="ASV">American Standard Version</option>
//                     <option key="CPDV" value="CPDV">Catholic Public Domain Version</option>
//                     <option key="NASB" value="NASB">New American Standard Bible</option>
//                 </select>


//                 {bibleData && <div></div>}
//             </div>
            
//         </div>

//         </div>


  

// )

// }

// export default VerseCompare;