const express=require('express');
var router=express.Router();

const ctrtUser=require('../controllers/user.controller');
const place=require('../controllers/place.controller')

router.post('/register',ctrtUser.registers);

router.post('/login',ctrtUser.login);

router.post('/reset',ctrtUser.reset);

router.post('/postPlace',place.postPlace);

router.get('/getPlaces',place.getPlaces);

router.get('/getPlace/:_id',place.getPlace);

router.put('/editPlace',place.editPlace);


router.delete('/deletePlace/:placeName',place.deletePlace);

module.exports=router;
