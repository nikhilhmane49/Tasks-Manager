import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
}
