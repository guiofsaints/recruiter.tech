import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container, Hidden, Link } from "@material-ui/core";
import RoundedButton from "../../Form/RoundedButton/RoundedButton";
import useStyles from "./Header.styles";

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <img
                src="/images/logo-white.png"
                alt="recruiter.tech"
                className={classes.logo}
                width={160}
              />
            </Typography>
            <Hidden xsDown>
              <Link className={classes.link} href="/about">
                SOBRE
              </Link>
            </Hidden>
            <Link href="/sign">
              <RoundedButton>Entrar</RoundedButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
