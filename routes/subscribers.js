const express = require("express")
const router = express.Router()

// getting all
router.get('/', (req, res)=>{
    res.send("Hello world");
})
// getting one

// :id, means inside the callback the id using req.params.id
router.get('/:id', (req, res)=>{

})

// create route 
router.post('/', (req, res)=>{

})
// updating one
router.patch('/:id', (req, res)=>{

})
// deleting one
router.delete('/:id', (req, res)=>{

})

module.exports = router