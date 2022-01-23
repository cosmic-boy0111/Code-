const express = require('express')

const router = express.Router()

const cppProblems = require('../../model/programming/cppProblems')

router.post('/addProblem', async (req,res)=>{
    const { title,description,mainTag,subTags,difficulty,testCases } = req.body;

    try {
        const data = new cppProblems({ title,description,mainTag,subTags,difficulty,testCases });
        await data.save();
        res.status(200).json({ message: 'problem added' })
    } catch (error) {
        res.status(400).json({ message: 'problem not added' })
        console.log(error);
    }

})

router.get('/getCppProblems',async(req,res)=>{
    try {
        const data = await cppProblems.find();
        if(data){
            res.status(200).send(data)
        }else{
            res.send([])
        }
    } catch (error) {
        res.status(400).send({'message' : 'data not found'})
    }
})

module.exports = router