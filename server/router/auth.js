const { response } = require('express');
const express = require('express')



const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');
const {
    User
} = require('../model/userSchema')

router.get('/', (req,res)=>{
    res.send(`hello world from the server router js`)
})

///////////////// user //////////////// 

router.post('/register',async(req,res)=>{
    const { user,password } = req.body
    if( !user || !password ){
        return res.status(422).json({error:'error'});
    }

    try {
        const userExits =  await  User.findOne({user:user});

        if(userExits){
            return res.status(422).json({error:'user already exist'})
        }

        const data = new User({user,password});
        await data.save();

        res.status(201).json({ message: 'user registered' })

    } catch (error) {
        console.log(error);
    }
});


// login route

router.post('/signin', async (req,res)=>{
    console.log('in signin');
    try {
        let token;
        const {user,password} = req.body;
        if(!user || !password){
            return res.status(400).json({
                error:'plz fill the data'
            })
        }

        const userLogin = await User.findOne({user:user});

        // console.log(userLogin);
        if(userLogin){
            console.log(User);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            console.log(token);

            res.cookie("jwToken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({
                    error:'invalid credentials'
                });
            }else{
                res.json({
                    message:'user sign in successfully'
                });
            }
        }else{
            res.status(400).json({
                error:'invalid credentials'
            });
        }

    } catch (error) {
        res.json({
            error:'error'
        });
    }
})

// get user data for contact us and home page

router.get('/about', authenticate , (req,res)=>{
    console.log(`hello my about`);
    res.send(req.rootUser);
})




module.exports = router