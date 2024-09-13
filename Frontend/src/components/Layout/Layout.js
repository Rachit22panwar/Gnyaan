import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from 'react-hot-toast';
import Body from "./Body";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        <Body />
        {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;