const { Router } = require('express');
const express = require('express');
const contacts = require('../models/contacts');
const router = express.Router();

router.get('/contacts',(req,res,next)=>{
    contacts.find(function(err,contacts){
        res.json(contacts);
    })
});

//add contacts
router.post('/contact',(req,re,next)=>{
    let newContact = new contacts({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });

    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msd:'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added successfully'});
        }
    })
})


router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports=router;