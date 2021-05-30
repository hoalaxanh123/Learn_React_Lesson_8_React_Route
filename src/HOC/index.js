import React from "react";

import CopyrightCustom from "../components/copyright";
import { CssBaseline } from "@material-ui/core";
import { Toaster } from "react-hot-toast";
import MyMenu from "../components/menu";

const withMyTheme = (WrappedComponent) => {
  return function () {
    return (
      <>
        <CssBaseline />
        {/* Menu */}
        <MyMenu />
        {/* End Menu */}

        {/* Content */}
        <WrappedComponent />
        {/* End Content */}

        {/* Copyright */}
        <CopyrightCustom />
        {/* End Copyright */}

        {/* Message bar */}
        <Toaster
          position='bottom-center'
          toastOptions={{
            duration: 3000,
          }}
        />
        {/* End Message bar */}
      </>
    );
  };
};
export default withMyTheme;
