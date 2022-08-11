import '../src/assets/styles/styles.css';
import "../src/assets/styles/reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./templates/signUpPage";
import SignIn from './templates/signUpPage/signInPage';
import HomePage from './templates/HomePage/HomePage';
import ProfilePage from "./templates/ProfilePage"

import userContext from './contexts/userContext';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState({})
  return(
    <>
      <BrowserRouter>
        <userContext.Provider value={{userData, setUserData}}>
          <Routes>      
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  )  
}

export default App;
