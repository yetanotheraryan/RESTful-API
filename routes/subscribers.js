const express = require("express")
const router = express.Router()
const Subscriber = require('../models/subscriber')
// getting all
router.get('/', async(req, res)=>{
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
// getting one

// :id, means inside the callback the id using req.params.id
router.get('/:id', (req, res)=>{
    res.send(req.params.id);
})

// create route 
router.post('/', async(req, res)=>{
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
// updating one
router.patch('/:id', (req, res)=>{

})
// deleting one
router.delete('/:id', (req, res)=>{

})

module.exports = router