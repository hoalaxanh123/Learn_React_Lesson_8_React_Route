import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { myStyle } from "../styles";
import LoginModal from "../components/fadeModal";


export const MyMenu = () => {
  const classes = myStyle();
  const [showModal, setShowModal] = useState(false);

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
            TMA Solution
          </Typography>
          <nav>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Support
            </Link>
          </nav>
          <Button
            href='#'
            color='primary'
            variant='outlined'
            className={classes.link}
            onClick={() => setShowModal(!showModal)}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Login modal */}
      <LoginModal isDisplayModal={showModal} setShowModal={setShowModal} />
      {/* End Login modal */}
    </>
  );
};

export default MyMenu;
