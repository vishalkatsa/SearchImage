// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
//   const [value, setValue] = useState('Hello from Context!');
const [searchedImage, setSearchedImage] = useState([]);
const [showImages, setShowImages] = useState(false);

  return (
    <MyContext.Provider value={{ 
        searchedImage,setSearchedImage,showImages, setShowImages

     }}>

      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
