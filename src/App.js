// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layout/admin/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;

// import React from 'react';
// import Sidebar from './component/sidebar/Sidebar';
// import MainContent from './MainContent';


// const App = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <MainContent />
//     </div>
//   );
// };

export default App;
