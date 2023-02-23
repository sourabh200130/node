const express = require('express');
const router = express.Router();
const model= require('../modules/studentModel');

router.delete('/:_id', async(req,res) =>{
    
    try {
        const id=req.params.id;

        await model.deleteOne(id);
        res.status(200).send('deleted succesfully');
    } catch (error) {
        res.status(400).send(error);
    }
})
module.exports = router;