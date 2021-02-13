import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button, Container, Hidden, Link } from "@material-ui/core";
import useStyles from "./Header.styles";

const menuLinks = [
  {
    id: 0,
    text: "O Projeto"
  },
  {
    id: 1,
    text: "Meu Perfil"
  }
];

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <img
                src="/images/logo-white.png"
                alt="recruiter.tech"
                width={140}
              />
            </Typography>
            <Hidden xsDown>
              <div>
                {menuLinks.map((item) => (
                  <Link key={item.id}>
                    <Button className={classes.button}>{item.text}</Button>
                  </Link>
                ))}
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
