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
        await Task.create()
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

export default router