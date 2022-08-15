import '../src/assets/styles/styles.css';
import "../src/assets/styles/reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './templates/HomePage/HomePage';
import ProfilePage from "./templates/ProfilePage/ProfilePage"

import userContext from './contexts/userContext';
import isSignOutOpenContext from "./contexts/isSignUpOpenContext"

import { useState } from 'react';
import ItemPage from './templates/ItemPage/ItemPage';

function App() {

  const [userData, setUserData] = useState({})
  const [isSignOutOpen,setIsSignOutOpen] = useState(false)
  
  return(
    <>
      <BrowserRouter>
        <isSignOutOpenContext.Provider value={{isSignOutOpen,setIsSignOutOpen}} >
          <userContext.Provider value={{userData, setUserData}}>
            <Routes>      
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/item/:itemId" element={<ItemPage />} />
            </Routes>
          </userContext.Provider>
        </isSignOutOpenContext.Provider>
      </BrowserRouter>
    </>
  )  
}

export default App;
