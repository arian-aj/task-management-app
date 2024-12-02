import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// lesen
// /api/tasks?sortField=title&sortDirection=asc
router.get("/", async (req, res, next) => {
    try {
        //default Wert
        let sortDirection = "asc";
        if (req.query.sortDirection === "desc") {
            sortDirection = "desc"
        }

        // default Wert
        let sortField = "title";
        // falls gesetzt als Query Parametetr: passe an
        if (req.query.sortField === "status") {
            sortField = "status";
        } else if (req.query.sortField === "priority") {
            sortField = "priority";
        }

        const data = await Task.find().sort({[sortField]: sortDirection});
        if (!data) {
            res.status(404).json({message: "not found"})
        }
        res.status(200).json(data);

    } catch(error) {
        next(error)
    }
})

// erstellen
router.post("/", async (req, res, next) => {
    try {
        const { title, description, priority, status } = req.body;

        if(!title ) {
            return res.status(400).json({message: "invalid task"});
        }

        const task = await Task.create({
            title: title,
            description: description ? description : "",
            priority: priority,
            status: status
        })

        res.status(201).json(task)
    } catch(error) {
        next(error)
    }
})


// löschen 
router.delete("/:id", async (req, res, next) => {
    try {
        const data = await Task.deleteOne({_id: req.params.id})
        if (data.deletedCount === 0) {
            return res.status(404).json({message: "task not found"})
        }
        res.status(204).send()

    } catch(error) {
        next(error)
    }
})

// bearbeiten 
router.patch("/:id", async (req, res, next) => {
    try {
        const data = await Task.updateOne({_id: req.params.id}, req.body, {runValidators: true});
        if (data.matchedCount === 0) {
            return res.status(404).json({message: "task not found"})
        }
        res.status(200).json({message: "succesfully updated"})
    } catch(error) {
        next(error)
    }
})

export default router