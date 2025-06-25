const userModel = require('../Model/usermodel');
const taskModel = require('../Model/usertaskmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validator = require('validator');



//##api for regester

const regester= async (req,res)=>{



    try {

        const{name,email,password}=req.body;


        if(!name||!email||!password){
            return res.json({
                success:false,
                Message:"fille all the detail"
            })
        }
        
        //email validactor
        
        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"Please provide a valid email"
            })
        }
        //password validation
        
        if(!validator.isLength(password,{min:8})){
            return res.json({
                success:false,
                message:"Password must be at least 8 characters long"
            })
        }
        
        
        //hashing the password
        
        const salt= await bcrypt.genSalt(10);
        
        const hashpassword = await bcrypt.hash(password,salt);
        
        
        const data ={
        
            name,
            email,
            password:hashpassword,
        }
        
        const usermodel = new userModel (data);
        
        const user= await usermodel.save();
        
        
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

        if(token){
        res.status(200).json({
            success: true,
            token: token,
            message: "User regester successful"
        })
    }

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }



}



const userlogin = async(req,res)=>{



    try {
      
        const {email,password}=req.body;
    
        const user = await userModel.findOne({email});
    
        if(!user){
           return res.json({
                success:false,
                message:"user does not extist"
            })
        }
        
        const ismacth= await bcrypt.compare(password,user.password);
    
        if(ismacth){
    
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    
            res.json({
    success:true,
    token,
    
            })
        }
    
        else{
            res.json({
                success:false,
                message:"The input is worng"
            })
        }
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
    
}
    


// Get tasks with optional filters
const getTasks = async (req, res) => {
  try {
    const { status, assignee } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (assignee) filter.assignedTo = assignee;

    const tasks = await taskModel.find(filter);
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Get Tasks Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch tasks" });
  }
};





const createTask = async (req, res) => {
  try {
    const userId = req.user.id
    const task = new taskModel(req.body);
    
    await task.save();

    // Assume req.body.assignedTo is user email
    const user = await userModel.findById(req.user.id); // ✅ correct way

    if (user) {
      user.taskmodel.push(task._id);  // ✅ works because taskmodel is now an array
      await user.save();
    }


    res.status(201).json(task);
  } catch (error) {
    console.error("Create Task Error:", error);
    res.status(500).json({ success: false, message: "Failed to create task" });
  }
}; //done



//   try {
//     const task = new taskModel({
//       ...req.body,
//       assignedTo: req.user.email  // or you can use req.user.id if needed
//     });

//     await task.save();

//     const user = await userModel.findById(req.user.id);
//     if (user) {
//       user.taskmodel.push(task._id);
//       await user.save();
//     }

//     res.status(201).json(task);
//   } catch (error) {
//     console.error("Create Task Error:", error);
//     res.status(500).json({ success: false, message: "Failed to create task" });
//   }
// };


// Update task by ID
const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Update Task Error:", error);
    res.status(500).json({ success: false, message: "Failed to update task" });
  }
};

// Delete task by ID
const deleteTask = async (req, res) => {
  try {
    await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error("Delete Task Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete task" });
  }
};

module.exports = {
    regester,
    userlogin,
  getTasks,
  createTask,
  updateTask,
  deleteTask
};

  


