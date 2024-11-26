import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// lesen
router.get("/", async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
})

// erstellen
router.post("/", async (req, res, next) => {
    try {
        const { title, description, priority, status } = req.body;

        if(!title ) {
            return.res.status(400).json({message: "invalid task"});
        }

        const task = await Task.create({
            title: title,
            description: description ? description : "";
            priority: priority,
            status: status
        })

        res.status(201).json(task)
    } catch(error) {
        next(error)
    }
})


// löschen 
router.delete("/", async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
})

// bearbeiten 
router.put("/", async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
})

export default router