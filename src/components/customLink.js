// same NavLink (https://reactrouter.com/web/api/NavLink) 

import { myStyle } from "../styles";

import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CustomNavLink = (props) => {
	const {to,activeOnlyWhenExact,label} = props
  const classes = myStyle();
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <span className={match ? classes.menuActive : ""}>
      <Link to={{pathname: to, state: { from: props?.location?.pathname }}} className={classes.link}>
        {label}
      </Link>
			
    </span>
  );
};
export default CustomNavLink;
