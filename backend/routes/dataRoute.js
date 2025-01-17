const express = require('express');
const router = express.Router();


const {
    getAllData,
    addHighlight,
    createData,
    addBookMark,
    updateData,
    deleteHighlight,
    deleteBookMark
} = require('../controller/dataController')

const requireAuth = require('../middleware/requireAuth')


router.use(requireAuth)

// get all data
router.get('/', getAllData)

// get a single data 
// router.get('/:id', getData)

// post a new data 
router.post('/', createData)
router.post('/highlight', addHighlight)
router.post('/bookmark', addBookMark)

// delete a data
router.delete('/bookmark/:id', deleteBookMark)

// delete a highligh
router.delete('/highlight/:id', deleteHighlight)

// update a data
router.patch('/highlight/:id', updateData)

module.exports = router