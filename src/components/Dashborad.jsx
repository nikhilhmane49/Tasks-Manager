import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CreateTask from "./CreateTask";
import GetTasks from "./GetTasks";
import UpdateTask from "./UpdateTask";
import Slider from "./Silder";

const API_URL = "http://localhost:4000/api/task"; // adjust as needed

const Dashboard = () => {
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <div className="flex items-start">
      <Slider />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/get-tasks" element={<GetTasks />} />
          <Route path="/update-task" element={<UpdateTask />} />
        </Routes>
                </div>
            </div>
        </div>
    );

}
export default Dashboard;
