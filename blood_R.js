const express = require('express');
const router = express.Router();
module.exports = router;

const Blood_Mid=require("../middleware/blood_Mid");

router.post('/blood',[Blood_Mid.AddBloodPressure], (req, res) => {
    if(req.success){
        res.status(200).json({msg:"ok",Last_Id:req.insertId});
    } else {
        return res.status(500).json({message: err});
    }
});

router.get('/blood', [Blood_Mid.ReadBloodPressure], (req,res) => {
    if(req.success){
        res.status(200).json({msg:"ok",data:req.blood_data});
    } else{
        return res.status(500).json({message: err});
    }
});

router.put('/blood', [Blood_Mid.UpdateBloodPressure], (req, res) => {
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});

router.delete('/blood',[Blood_Mid.DeleteBloodPressure], (req, res) => {
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});