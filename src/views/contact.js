import { Container } from "@material-ui/core";
import React from "react";
import withMyTheme from "../HOC";

const Contact = () => {
  return (
    <Container maxWidth='md' component='main'>
      <h1>Contact page</h1>
    </Container>
  );
};

export default withMyTheme(Contact);
