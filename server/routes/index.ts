import { Router } from "express";
import Task  from "../models/Tasks";

const router = Router()

router.get('/tasks',async(req,res)=>{
    const tasks = await Task.find();
    res.send(tasks)
})

router.post('/tasks',async(req,res)=>{
    const {title, description} = req.body;
    const task = new Task ({title,description});
    await task.save()
    res.json(task)
})

router.get('/tasks/:id',async(req,res)=>{
    try {
        const task =await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message:"Task not found"})
        }
        res.send(task)
    } catch (error) {
        return res.status(404).json({message:"Task not found"})
    }   
})

router.delete('/tasks/:id',async(req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task)
    } catch (error) {
        return res.status(404).json({message:"Task not found"})
    }
})
router.put('/tasks/:id',async(req,res)=>{
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        res.json(updatedTask)
    } catch (error) {
        return res.status(404).json({message:"Task not found"})
        
    }
})
export default router