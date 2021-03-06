import React from "react";
import withMyTheme from "../HOC";
import { Link } from "react-router-dom";
import { LINK_URL } from "../constants";
import { Container } from "@material-ui/core";
import { myStyle } from "../styles";


const NotFound = () => {
  const classes = myStyle();
  return (
    <Container maxWidth='lg' component='main' className={classes.errorPage}>
      <h1>404</h1>
      <h2>Sorry, the resource that you looking for no longer exist</h2>
      <Link to={LINK_URL.homepage}>Click here to go back</Link>
    </Container>
  );
};

export default withMyTheme(NotFound);
