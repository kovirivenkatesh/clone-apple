import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Component from "./Component/Component";
import StoreComp from "./Apple/HeaderComp/Store/StoreComp";
import MacComp from "./Apple/HeaderComp/Macbook/MacComp";
import IPadComp from "./Apple/HeaderComp/iPad/iPadComp";


function App() {
  return (
    <Router basename="/clone-apple">
      <Routes>
        <Route path="/" element={<Component />}>
          <Route index element={<StoreComp />} />
          <Route path="store" element={<StoreComp />} />
          <Route path="mac" element={<MacComp />} />
          <Route path="ipad" element={<IPadComp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
