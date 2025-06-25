import React, { useState } from "react";
import { Slide } from "react-toastify";
import Silder from "./Silder";

import axios from "axios";

function CreateTask() {
    const [form, setForm] = useState({
      title: "",
      description: "",
      assignedTo: "",
      status: "To Do",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        try {
            const response = await axios.post(
            "http://localhost:4000/api/task/create-task",
            form,
            {
                headers: {
                token: localStorage.getItem("token") || "",
                },
            }
            );
    
            if (response.data.success) {
            setMessage("Task created successfully!");
            setForm({
                title: "",
                description: "",
                assignedTo: "",
                status: "To Do",
            });
            } else {
            setMessage(response.data.message || "Failed to create task.");
            }
        }
      catch (err) {
        console.error(err);
        setMessage("Failed to create task. Please try again.");
      }
    };
  return (
    <div className="container">
      <div className="flex items-start">
        <Silder />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Task</h2>

            {message && (
              <p className="mb-4 text-center text-red-600 font-semibold">
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows={3}
              />

              <input
                type="text"
                name="assignedTo"
                placeholder="Assign to (e.g. user ID or name)"
                value={form.assignedTo}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
