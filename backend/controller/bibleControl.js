const fs = require('fs');
const path = require('path');
// const f = require('../assets/holybooks/NT/1CO/ASV.json')

const bibe = require('../model/userModel')
const mongoose = require('mongoose')
// get english
const getEnglish = (req, res) => {
      const { testement, book, version } = req.params;
        
        // Log the request URL (for debugging)
        console.log(req.url);
    
        // Construct the file path dynamically
        // const filePath = `../assets/holybooks/${testement}/${book}/${version}.json`;
        const filePath = path.join(__dirname, `../assets/holybooks/${testement}/${book}/${version}.json`)
    
        // Read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error reading file'); // Respond with an error if the file doesn't exist
            }
    
            // Parse and return the JSON content
            const books = JSON.parse(data);
            return res.json(books);
        });

}

// get dha anywaa
const getDhaAnywaa = (req, res) => {
     const { testement, book } = req.params;
        
        // Log the request URL (for debugging)
        console.log(req.url);
    
        // Construct the file path dynamically
        const filePath = path.join(__dirname, `../assets/holybooks/ANY/${testement}/${book}.json`) ;
    
        // Read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error reading file'); // Respond with an error if the file doesn't exist
            }
    
            // Parse and return the JSON content
            const books = JSON.parse(data);
            return res.json(books);
        });

        // home page 
        // const homePage = (req, res) =>{
        //     console.log(req.url)
        //     fs.readFile('./assets/holybooks/NT/1CO/ERV.json', 'utf8', (err, data) => {
        //         if (err) {
        //             console.error(err);
        //             return res.status(500).send('Error reading file'); // Stops further execution
        //         }
        //         const books = JSON.parse(data);
        //         return res.json(books); // Sends the JSON response
        //     });
        // }
    

}


// get amharic
const getAmharic = (req, res) => {
    const {book } = req.params;
    const decodedBook = decodeURIComponent(book);
    console.log(decodedBook);
    
    // Log the request URL (for debugging)
    console.log(req.url);

    // Construct the file path dynamically
    const filePath = path.join(__dirname, `../assets/holybooks/AM/${book}.json`);
    //

    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading amharic file');
        }

        const books = JSON.parse(data);
        return res.json(books);
    });
}

const getAllData = async (req, res) => {
    const user_id = req.params.user_id;
    const user = await bible.find({user_id})
}


module.exports = {
    getEnglish,
    getDhaAnywaa,
    getAmharic,
    // homePage
 
}
