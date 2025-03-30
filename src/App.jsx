import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Tax from "./components/Tax";
import Setting from "./components/Setting";
import Contract from "./components/Contract";
import Card from "./components/Card";
import Review from "./components/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Combine the imports

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Header />
        <div className="grid grid-cols-11 h-[86vh]">
          {/* First Column */}
          <div className="col-span-2 bg-[#F6F7FB] px-5">
            <Sidebar />
          </div>

          {/* Middle Column (spans 6 columns) */}
          <div className="col-span-6 px-6">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Tax" element={<Tax />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Contract" element={<Contract />} />
              <Route path="/Review" element={<Review />} />
            </Routes>
          </div>

          {/* Last Column */}
          <div className="col-span-3 p-4">
            <Card />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
