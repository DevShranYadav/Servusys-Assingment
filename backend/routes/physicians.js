const express = require('express');
const router = express.Router();
const Physician = require('../models/Physician')

router.post('/create', async (req, res) => {
    const { name, dob, gender, address, aadhaarNo, specialization, licenseNumber, contactDetails, email } = req.body;
    try {
        const newPhysician = new Physician({ name, dob, gender, address, aadhaarNo, specialization, licenseNumber, contactDetails, email });
        await newPhysician.save()
        res.send(newPhysician)
    } catch (error) {
        res.send(error)
    }

})

router.get('/list', async (req, res) => {
    try {
        const data = await Physician.find();
        res.send(data)

    } catch (error) {
        console.error(error)
    }
})

router.get('/search/:key', async (req, res) => {
    const data = await Physician.find({
        "$or": [
            { name: { $regex: req.params.key }},
            // { specialization: { $regex: req.params.key }},
        ]
    })
    res.send(data)
})
router.put('/update/:key',async(req,res)=>{
    const data=await Physician.updateOne(
        {_id: req.params.key},
    { $set: req.body}
    )
    res.send(data)
})

router.delete('/delete/:_id', async (req, res) => {
    const data = await Physician.deleteOne(req.params.name)
    res.send(data)

})

module.exports = router;