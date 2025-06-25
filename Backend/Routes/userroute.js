const express = require('express');


const {regester ,userlogin, getTasks,
  createTask,
  updateTask,
  deleteTask} =require('../Contorell/usercon');

const authuser = require('../Midellware/AuthUser');



const userroutes = express.Router();

userroutes.post('/user-resgretration', regester);//done
userroutes.post('/user-login', userlogin);//done
userroutes.get('/get-tasks',authuser,getTasks);//done
userroutes.post('/create-task',authuser,createTask); //done
userroutes.put('/update-task/:id',authuser,updateTask);//done
userroutes.delete('/delete-task/:id',authuser,deleteTask);//done

module.exports =userroutes;