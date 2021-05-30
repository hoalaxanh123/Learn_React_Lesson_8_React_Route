import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { myStyle } from "../styles";
import { LINK_URL, LOGGED } from "../constants";
import UserMenu from "./userMenu";
import { Link } from "react-router-dom";
import CustomNavLink from "./customLink";

export const MyMenu = () => {
  const classes = myStyle();

  const logged = localStorage.getItem(LOGGED);

  const LinkToLogin = (
    <>
      <Link
        to={{pathname: LINK_URL.login, state: { from: window.location.href }}}
        className={classes.btnLogin}
      >
        {"Login"}
      </Link>
    </>
  );
  const LoginOrLogoutComponent = logged ? <UserMenu /> : LinkToLogin;

  return (
    <>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            <Link to={LINK_URL.homepage} className={classes.menuTittle}>
              TMA Solution
            </Link>
          </Typography>
          <nav>
            <CustomNavLink
              to={LINK_URL.homepage}
              label={"Home"}
              activeOnlyWhenExact={true}
            />
            <CustomNavLink
              to={LINK_URL.about}
              label='About'
              activeOnlyWhenExact={false}
            />
            <CustomNavLink
              to={LINK_URL.contact}
              label='Contact'
              activeOnlyWhenExact={false}
            />
            <CustomNavLink
              to={LINK_URL.management}
              label='Management'
              activeOnlyWhenExact={false}
            />
          </nav>
          {LoginOrLogoutComponent}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MyMenu;
