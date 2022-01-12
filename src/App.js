import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Nav from "./components/nav";
import Dasboard from "./pages/dasboard";
import Detail from "./pages/detail";
import Homepage from "./pages/homepage";
import NotFound from "./pages/notFound";
import Profil from "./pages/profil";


function App() {
  return (
      <div>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/profil/:nama" element={<Profil/>}/>
          <Route path="/dasboard/:nama" element={<Dasboard/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
  );
}

export default App;
