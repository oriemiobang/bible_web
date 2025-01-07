const mongoose = require('mongoose');
const dataSchema = require('../model/dataModel')

// get all to do 
const getAllData = async (req, res)=> {
    const data  = await dataSchema.find({})
    res.status(200).json(data)
}

// get a single data 
const getData = async  (req, res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Invalid id'})
    }
    const data = await dataSchema.findById(id)
    if(!data){
        return res.status(404).json({message:'Todo not found'})
    }
    res.status(200).json(data)
}

// create a new data 
const createData = async (req, res) => {
    const { highlights, bookmarks, user_id } = req.body;

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


const deleteHighlight = async (req, res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such hightlight'})
    }

    const data  = await dataSchema.findOneAndUpdate(
        { "highlights._id": id }, 
        { $pull: { highlights: { _id: id } } },
        { new: true }
    )

    if (!data) {
        return res.status(404).json({ error: 'Highlight not found' });
    }

    res.status(200).json({ message: 'Highlight deleted successfully', data });
    
}
const deleteBookMark = async (req, res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such hightlight'})
    }

    const data  = await dataSchema.findOneAndUpdate(
        { "bookmarks._id": id }, 
        { $pull: { bookmarks: { _id: id } } },
        { new: true }
    )

    if (!data) {
        return res.status(404).json({ error: 'Highlight not found' });
    }

    res.status(200).json({ message: 'Highlight deleted successfully', data });
    
}



module.exports = {
    getAllData,
    getData,
    createData,
    updateData,
    deleteHighlight,
    deleteBookMark
 
}