import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Appcontext = createContext();

const AppProvider = (props) => {

    const value = {
      };
    
    
      return (
        <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
      );
    };
    
    export default AppProvider;