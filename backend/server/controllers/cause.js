import mongoose, { Mongoose } from 'mongoose';

import Cause from '../models/cause';

// create new cause
export function createCause(req, res) {
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
        .catch((error) => {
            res.status(501).json({
                success: false,
                messages: 'server erorr. try again',
                error: error.messages,
            })
        })
}

export function getSingleCause(req, res){
    const id = req.params.causeId;
    Cause.findById(id)
        .then((singleCause)=>{
            res.status(200).json({
                success: true,
                message: singleCause.title,
                Cause: singleCause
            })
        })
        .catch((err)=>{
            res.status(500).json({
                success: false,
                message: 'dont exist',
                error: err.message
            })
        })
}


// Get all causes
export function getAllCause(req, res){
    Cause.find()
        .select('_id title description')
        .then((allCause) => {
            return res.status(200).json(allCause);
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

export function updateCause(req, res) {
    const id = req.params.causeId;
    const updateObject = req.body;

    Cause.update({_id: id}, {$set: updateObject})
        .exec()
        .then(()=>{
            return res.status(200).json({
                success: true,
                message: 'cause updated',
                updateCause: updateObject
            });
        })
        .catch((error)=> {
            res.status(500).json({
                success: false,
                message: 'update failed'
            })
        });
}

export function deleteCause(req, res){
    const id = req.params.causeId;
    Cause.findByIdAndDelete(id)
    .exec()
    .then(()=>{
        return res.status(204).json({
            success: true,
            message: 'deleted successfully!',
        })
    })
    .catch((error)=>{
        res.status(500).json({
            success: false,
            message: 'deleted error'
        })
    })
}
