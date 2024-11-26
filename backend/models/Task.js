import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema ({
   title: {
    type: String,
    required: true
   },
   description: {
    type: String,
   },
   priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low"
   },
   status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending"
   }
})

const Task = mongoose.model("Task", taskSchema);

export default Task