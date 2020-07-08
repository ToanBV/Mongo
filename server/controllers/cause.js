import mongoose, { Mongoose } from 'mongoose';

import Cause from '../models/cause';

// create new cause
export function createCause(req, res){
    const cause = new Cause({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
    });

    return cause
        .save()
        .then((newCause) => {
            res.status(201).json({
                success: true,
                messages: 'new Cause created successfully!',
                cause: newCause,
            });
        })
        .catch((error)=>{
            res.status(501).json({
                success:false,
                messages: 'server erorr. try again',
                error: error.messages,
            })
        })
}