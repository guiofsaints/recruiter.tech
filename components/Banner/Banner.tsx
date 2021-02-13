import React from "react";

import { Typography, Grid, Button, Container } from "@material-ui/core";
import Paperbox from "../Paperbox";
import styles from "./Banner.module.css";
import useStyles from "./Banner.styles";

const Banner = (): JSX.Element => {
  const classes = useStyles();

  const RedButton = ({ children }): JSX.Element => (
    <Button className={classes.button} variant="outlined" fullWidth>
      {children}
    </Button>
  );

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.banner}
      >
        <Grid item xs={12} sm={12} md={5} xl={5}>
          <Typography variant="h2" className={classes.titleBanner}>
            Em busca de mais <br />
            <span className={styles.rainbowText}>diversidade</span> na
            tecnologia.
          </Typography>
          <Paperbox>
            <Container>
              <Typography
                variant="h1"
                align="center"
                className={classes.titleIntro}
              >
                Crie seu perfil ou encontre pessoas para sua empresa
              </Typography>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <RedButton>Criar meu Perfil</RedButton>
                </Grid>
                <Grid item>
                  <RedButton>Encontrar Pessoas</RedButton>
                </Grid>
              </Grid>
            </Container>
          </Paperbox>
        </Grid>
        <Grid item sm={12} md={5} xl={5} className={classes.imgBanner}>
          <img
            src="/images/banner-robot.png"
            alt="pessoas construindo um robo"
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
