import React from 'react'
import Silder from "./Silder";

function Gettask() {
  return (
    <div className="container">
      <div className="flex items-start">
        <Silder />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Update Task</h1>
          <p>This is the update task content.</p>
        </div>
      </div>
    </div>
  );
}

export default Gettask