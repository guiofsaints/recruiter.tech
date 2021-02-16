import React from "react";

import { Container, Link } from "@material-ui/core";
import useStyles from "./Footer.styles";

const Footer = (): JSX.Element => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className={classes.footer}>Recruiter.tech | {year}</div>
      </Container>
    </footer>
  );
};

export default Footer;
