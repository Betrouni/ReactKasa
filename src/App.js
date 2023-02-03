import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Appartement from "./pages/Appartement";
import APropos from "./pages/APropos";
import Error from "./pages/Error";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/appartement/:id" element={<Appartement />} />

        <Route path="/APropos" element={<APropos />} />

        <Route path="/404" element={<Error />} />
    
            <Route path="*" element = { <Navigate replace to='/404' /> } />
            <Route path="/*" element = { <Navigate replace to='/404' /> } />

      </Routes>
    </div>
  );
}

export default App;
