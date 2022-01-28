const express = require('express')

const router = express.Router()

const cppProblems = require('../../../model/programming/Cpp/cppProblems')

router.post('/cpp/addProblem', async (req,res)=>{
    const { title,description,mainTag,subTags,difficulty,testCases,owner } = req.body;

    try {
        const data = new cppProblems({ title,description,mainTag,subTags,difficulty,testCases,owner });
        await data.save();
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: 'problem not added' })
        console.log(error);
    }

})

router.get('/cpp/getProblems',async(req,res)=>{
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

router.post('/cpp/deleteProblem/:id',async(req,res)=>{
    try {
        console.log(req.params['id']);
        const problem = await cppProblems.deleteOne({'_id' : req.params['id'] })
        // res.save();
        res.status(200).send({'message' : problem})
    } catch (error) {
        res.status(400).send({'message' : 'not deleted'})
    }
})


router.post('/cpp/updateProblem', async (req,res)=>{
    const {id,title,description,mainTag,subTags,difficulty,testCases } = req.body;

    try {
        
        var problem = await cppProblems.updateOne({_id:id},{
            $set : {
                title : title,
                description : description,
                mainTag : mainTag,
                subTags : subTags,
                difficulty : difficulty,
                testCases : testCases
            }
        });

        var problemGet = await cppProblems.findOne({_id:id})

        console.log(problem);

        res.status(200).json(problemGet)
    } catch (error) {
        res.status(400).json({ message: 'problem not added' })
        console.log(error);
    }

})

module.exports = router