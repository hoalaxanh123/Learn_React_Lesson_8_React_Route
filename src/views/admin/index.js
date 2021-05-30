import React from "react";
import { ROLE } from "../../constants";
import withMyTheme from "../../HOC";
import Forbidden from "../forbidden";

const Management = () => {
  let role = localStorage.getItem(ROLE);
  const managementComponent = (
    <>
      <h1>Management page</h1>
    </>
  );
  return role==='admin'?managementComponent:<Forbidden/>;
};

export default withMyTheme(Management);
