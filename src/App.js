import React from "react";
import  withMyTheme  from "./HOC";
import Prices from "./views/prices";

export const Homepage = () => {
    return (
            <Prices/>
    );
};

export default withMyTheme(Homepage);
