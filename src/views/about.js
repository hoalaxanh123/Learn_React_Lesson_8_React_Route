import { Container } from "@material-ui/core";
import React from "react";
import withMyTheme from "../HOC";

const About = () => {
  return (
    <Container maxWidth='md' component='main'>
      <h1>About page</h1>
    </Container>
  );
};

export default withMyTheme(About);
