import React from "react";
import Slider from "./Silder"; // Check: filename must match exactly (Slider vs Silder)

function Update() {
  return (
    <div className="container">
      <div className="flex items-start">
        <Slider />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Update Task</h1>
          <p>This is the update task content.</p>
        </div>
      </div>
    </div>
  );
}

export default Update;
