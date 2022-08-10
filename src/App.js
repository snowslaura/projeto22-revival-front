import '../src/assets/styles/styles.css';
import "../src/assets/styles/reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./templates/signUpPage";
import SignIn from './templates/signUpPage/signInPage';
import HomePage from './templates/HomePage/HomePage';
import ProfilePage from "./templates/ProfilePage"

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>     
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )  
}

export default App;
