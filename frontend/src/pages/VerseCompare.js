import { useEffect, useState, version } from "react";
import { useLocation } from "react-router-dom";
import { PulseLoader } from 'react-spinners';
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom"
import dotenv from "dotenv";
dotenv.config();

const VerseCompare = ()=> {

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

  const location = useLocation();
  const [bibleData, setBibleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verseList, setVerseList] = useState([]);

  const { verseNumb, myNumber } = location.state || {};
  const numb = localStorage.getItem('bookNumber');
  const backendUrl = process.env.REACT_APP_API_URL;


  const availableVersions =[
    'ANY',
    'AMH',
    'AMP',
    'ASV',
    'CPDV',
    'ERV',
    'ESV',
    'KJV',
    'NASB',
    'WEB'
  ];

  
  useEffect(() => {
    giveData();
  }, []);


  const giveData = ()=> {
    const test = localStorage.getItem('currentTestement')
    const book = localStorage.getItem('currentBook')
    // console.log('here in give')
    availableVersions.map((version)=> {
      fetchData(test, book, version);
    })
  }

    const fetchData = (testement, book, version)=> {
      // console.log('here in fetch')
    let path = ""
    if(version === "ANY"){
      path = `${backendUrl}/api/any/${testement}/${book}`
    }else if(version === "AMH"){
      path = `${backendUrl}/api/amh/${bookList[numb].amharic}`
    } else{
      path = `${backendUrl}/api/eng/${testement}/${book}/${version}`
    }
 
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching Bible data');
            }
            return response.json();
        })
        .then(data => {
          // setBibleData(data);
        if(version === 'AMH'){

          const verse = {
            text: data.chapters[myNumber].verses[verseNumb - 1],
            version: version
            }
         
            setVerseList((prevVerseList) => {
              const alreadyExists = prevVerseList.some(
                (v) => v.version === verse.version && v.text === verse.text
              );
              if (alreadyExists) return prevVerseList;
              return [...prevVerseList, verse];
            });

        } else if(version === 'KJV'){

          // let check =  data.text[myNumber].text[verseNumb - 1].text === ''?  data.text[myNumber].text[verseNumb - 2].text : data.text[myNumber].text[verseNumb - 1].text

          let check = ''

          data.text[myNumber].text.map((data, index)=> {
            if((parseInt(data.ID) - 1) === (verseNumb - 1) && data.text !='' ){
              check = data.text
            }
          })
          const verse = {
            text: check,
            version: version
            }
         
            setVerseList((prevVerseList) => {
              const alreadyExists = prevVerseList.some(
                (v) => v.version === verse.version && v.text === verse.text
              );
              if (alreadyExists) return prevVerseList;
              return [...prevVerseList, verse];
            });

        }
        else {
          const verse = {
            text: data.text[myNumber].text[verseNumb - 1].text,
            version: version
            }
         
            setVerseList((prevVerseList) => {
              const alreadyExists = prevVerseList.some(
                (v) => v.version === verse.version && v.text === verse.text
              );
              if (alreadyExists) return prevVerseList;
              return [...prevVerseList, verse];
            });
        }
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
  }


  // {console.log(verseList)}
  return(

    verseList.length < 5 ? <div className="w-full h-screen flex items-center justify-center">
    <PulseLoader color="#eba20c" size={10} />
  </div>:
  <div className="flex flex-col gap-3 px-2 pb-10 ">
    <div className="text-start flex gap-3 items-center text-3xl py-2"> <Link className="md:hidden" to={'/'}><span><GoArrowLeft /></span></Link> {bookList[numb].title + ' ' + (parseInt(myNumber) + 1) + ' : ' + verseNumb} </div>
    {verseList.map((verse)=> {
      return (
        <div className="flex text-start flex-col items-start " key={verse.version}>
          <h1 className=" text-gray-600 font-semibold text-xl">{verse.version}</h1>
          <p>{verse.text}</p>
        </div>
      )
    })}  
  </div>
)
}

export default VerseCompare;