import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import FormContextProvider from "./context/FormContextProvider";

function Layout() {
  return (
    <FormContextProvider>
      <Header />
      <Outlet />
    </FormContextProvider>
  );
}

export default Layout;
