import React, { useContext } from "react";
// import { Admincontext } from "../Contex/Admincontex";
import { NavLink } from "react-router-dom";

function Slider() {
//   const { atoken } = useContext(Admincontext);

  return (
    <>
          {/* {atoken && ( */}
          {(
        <div className="flex flex-col bg-blue-600 text-white w-72 h-screen p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-100">
            Admin Panel
          </h2>
          <ul className="flex flex-col space-y-6">
            <NavLink
              to="/create-task"
              className={({ isActive }) =>
                `p-4 rounded-lg text-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-gray-800 hover:shadow-md"
                }`
              }
            >
              Create Task
            </NavLink>

            <NavLink
              to="/get-tasks"
              className={({ isActive }) =>
                `p-4 rounded-lg text-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-gray-800 hover:shadow-md"
                }`
              }
            >
              Get Tasks
            </NavLink>

            <NavLink
              to="/update-task"
              className={({ isActive }) =>
                `p-4 rounded-lg text-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-gray-800 hover:shadow-md"
                }`
              }
            >
              Update Task
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default Slider;
