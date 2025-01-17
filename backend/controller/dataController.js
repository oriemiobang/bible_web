const mongoose = require('mongoose');
const dataSchema = require('../model/dataModel')

// get all to do 
const getAllData = async (req, res)=> {
    // const data  = await dataSchema.find({})
    // res.status(200).json(data)
    const user_id = req.user._id
    console.log(user_id)


    if(!mongoose.Types.ObjectId.isValid(user_id)){
        return res.status(404).json({message:'Invalid id'})
    }
    const data = await dataSchema.find({user_id})
    if(!data){
        return res.status(404).json({message:'data not found'})
    }
    res.status(200).json(data)
    
}

// create a new data 
const createData = async (req, res) => {
    const user_id = req.user._id
    const { highlights, bookmarks } = req.body;

    try {
        // Ensure required fields are provided
        if (!user_id) {
            return res.status(400).json({ error: 'User ID is required.' });
        }

        // Create a new document in the database
        const data = await dataSchema.create({
            highlights: highlights || [], // Defaults to an empty array if not provided
            bookmarks: bookmarks || [],  // Defaults to an empty array if not provided
            user_id
        });

        res.status(200).json(data); // Return the newly created document
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handle errors gracefully
    }
};


const updateData = async (req, res)=> {
    const {
        id
    } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})

    }

    const data = await dataSchema.findOneAndUpdate(
        { "highlights._id": id },
        { $set: { "highlights.$": { ...req.body } } },
        { new: true } 
    );

    if(!data){
        return res.status(404).json({message:'Data not found'})
    }
    res.status(200).json(data)
}


const addBookMark = async (req, res) => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
    const user_id = req.user._id;
    const { verse, version, book  } = req.body;

    console.log(typeof formattedDate, formattedDate)

    try {
        // Ensure required fields are provided
        if (!verse || !version || !book) {
            return res.status(400).json({ error: 'User ID, color, and verse ID are required.' });
        }

        // Create the highlight object
        const bookMark = { verse, version, book, formattedDate };
        console.log(bookMark);

        // Update the document by adding the highlight to the highlights array
        const updatedData = await dataSchema.findOneAndUpdate(
            { user_id }, // Find the document by user_id
            { $push: { bookmarks: bookMark } }, // Add the highlight to the highlights array
            { new: true } // Return the updated document
        );

        console.log(updatedData)
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found for the provided user ID.' });
        }

        res.status(200).json(updatedData); // Return the updated document
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handle errors gracefully
    }
};




const addHighlight = async (req, res) => {
    const user_id = req.user._id;
    const { color, verseId} = req.body;
    console.log(color, verseId);

    try {
        // Ensure required fields are provided
        if (!verseId || !color) {
            return res.status(400).json({ error: 'Color, and verse ID are required.' });
        }

        // Create the highlight object
        const highlight = { color, verseId };

        // Update the document by adding the highlight to the highlights array
        const updatedData = await dataSchema.findOneAndUpdate(
            { user_id }, // Find the document by user_id
            { $push: { highlights: highlight } }, // Add the highlight to the highlights array
            { new: true } // Return the updated document
        );

        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found for the provided user ID.' });
        }

        res.status(200).json(updatedData); // Return the updated document
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handle errors gracefully
    }
};



const deleteHighlight = async (req, res) => {
    const user_id = req.user._id; // Authenticated user's ID
    const { verseId } = req.body; // Extract verseId from the request body

    // Debugging log
    console.log('Request body:', req.body);
    console.log('VerseId:', verseId);

    try {
        // Ensure verseId is provided
        if (!verseId) {
            return res.status(400).json({ error: 'Verse ID is required.' });
        }

        // Find the document and remove the highlight with the given verseId
        const updatedData = await dataSchema.findOneAndUpdate(
            { user_id }, // Find the document by user_id
            { $pull: { highlights: { verseId } } }, // Remove the highlight from the array
            { new: true } // Return the updated document
        );

        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found for the provided user ID.' });
        }

        res.status(200).json(updatedData); // Return the updated data
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Server error occurred.' });
    }
};

const deleteBookMark = async (req, res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such bookmark'})
    }

    const data  = await dataSchema.findOneAndUpdate(
        { "bookmarks._id": id }, 
        { $pull: { bookmarks: { _id: id } } },
        { new: true }
    )

    if (!data) {
        return res.status(404).json({ error: 'bookmark not found' });
    }

    res.status(200).json({ message: 'bookmark deleted successfully', data });
    
}



module.exports = {
    getAllData,
    addHighlight,
    addBookMark,
  
    createData,
    updateData,
    deleteHighlight,
    deleteBookMark
 
}