import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import * as React from 'react';
import BackToTop from "./components/BackToTop";

function MasterPage() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <main id="main" className="main">
        <Outlet/>
      </main>
      <Footer/>
      <BackToTop/>
    </div>
  );
};

export default MasterPage;