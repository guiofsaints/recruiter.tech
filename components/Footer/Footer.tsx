import React from "react";

import { Container, Link } from "@material-ui/core";
import useStyles from "./Footer.styles";

const Footer = (): JSX.Element => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className={classes.footer}>
          recruiter | site sem fins lucrativos | {year} <br />
          <Link
            className={classes.link}
            href="https://github.com/guidroid/recruiter-tech"
          >
            Open Source
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
