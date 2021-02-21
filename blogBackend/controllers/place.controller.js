const { response } = require('express');
const mongoose = require('mongoose');
const { asyncScheduler } = require('rxjs');
const Place = mongoose.model('Place');

module.exports.postPlace = async (req, res) => {
    const checkPlace = await Place.findOne({ placeName: req.body.placeName });
    if (checkPlace) return res.status(400).send("Place already exists");
    var newPlace = new Place({
        placeName: req.body.placeName,
        image: req.body.image,
        description: req.body.description
    })
    console.log(newPlace);
    try {
        await newPlace.save((err, doc) => {
            if (!err) {
                return res.send({ place: newPlace.placeName });
            }
            else {
                return res.send(err)
            }
        })
    }
    catch (err) {
        res.send(err);
    }
}

module.exports.getPlaces = async (req, res) => {
    await Place.find().then(data => {
        res.send(data)
    })
}

module.exports.getPlace = async (req, res) => {
    await Place.find({_id:req.params._id}).then(data=>{
        res.send(data)
    });
}

module.exports.editPlace=async (req,res)=>{
    console.log(req.body);
    await Place.find({_id:req.body[0]._id}).then(data=>{
        console.log(data);
        if(data){
              Place.updateOne({_id:req.body[0]._id},{$set:{placeName:req.body[0].placeName,image:req.body[0].image,description:req.body[0].description}}).then(data=>{
                 res.send(data)
             })
        }
    });
}

module.exports.deletePlace = async (req, res) => {
    await Place.findOneAndDelete({ placeName: req.params.placeName }).then(data => {
        res.send(data)
    });

}