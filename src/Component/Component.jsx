import React from "react";
import Header from "../Apple/Header/Header";
import { Outlet } from "react-router-dom";

const Component = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow"> 
        <Outlet /> 
      </main>
    </div>
  );
};

export default Component;
