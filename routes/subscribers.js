const express = require("express")
const subscriber = require("../models/subscriber")
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
router.get('/:id', getSubscriber, (req, res)=>{
    res.json(res.subscriber)
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

});
// deleting one
router.delete('/:id', getSubscriber, async(req, res)=>{
    try{
        await res.subscriber.remove()
        res.json({message: "Deleted Successfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

// middleware
async function getSubscriber(req, res, next){
    let subscriber
    try{
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({message: 'cannot find subscriber.'})
        }
    } catch(err){
        return res.status(500).json({message: err.message})
    }
    // below LOC ensures that we can use res.subscriber would contain the required subscriber.
    res.subscriber = subscriber
    next()
}

module.exports = router