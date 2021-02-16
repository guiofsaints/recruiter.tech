import React from "react";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import { blue, pink, yellow } from "@material-ui/core/colors";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import StarIcon from "@material-ui/icons/Star";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

import GoogleIcon from "../components/Icons/GoogleIcon";
import Header from "../components/Section/Header";
import Footer from "../components/Section/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 3)
    },
    paper: {
      maxWidth: 600,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2)
    },
    button: {
      borderColor: pink.A700,
      borderRadius: 20,
      borderWidth: "0 0 6px",
      backgroundColor: pink.A400,
      color: "#fff",
      fontWeight: "bold",
      "&:hover": {
        color: "#fff",
        borderColor: "#404040"
      },
      width: "100%",
      marginTop: 20,
      fontSize: "0.7rem",
      padding: 10,
      "@media (max-width:950px)": {
        fontSize: "0.9rem",
        width: "300px"
      },
      backgroundClip: "padding-box",
      borderStyle: "solid"
    }
  })
);

const SignUp = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Header />
      {/* Register Component */}
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          style={{ marginTop: -60 }}
        >
          <Grid item xl={4} sm={4} xs={12}>
            <h1>Por que criar uma conta?</h1>
            <Grid
              container
              spacing={2}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={12}>
                <Card style={{ minHeight: 140, textAlign: "center" }}>
                  <CardContent>
                    <Avatar
                      style={{
                        backgroundColor: yellow[400],
                        margin: "0 auto"
                      }}
                    >
                      <MoneyOffIcon style={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ marginTop: 10 }}
                    >
                      <b>É Grátis</b>
                    </Typography>
                    <Typography variant="body2" component="p">
                      Não cobramos <b>NADA</b> para você utilizar a plataforma,
                      o objetivo aqui é aumentar a diversidade nas empresas e
                      não ganhar dinheiro.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Card style={{ minHeight: 140, textAlign: "center" }}>
                  <CardContent>
                    <Avatar
                      style={{
                        backgroundColor: yellow[400],
                        margin: "0 auto"
                      }}
                    >
                      <StarIcon style={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ marginTop: 10 }}
                    >
                      <b>Vagas e Conteúdo Exclusivo</b>
                    </Typography>
                    <Typography variant="body2" component="p">
                      Receba informações de vagas, notícias e cursos sobre
                      tecnologia. Todo conteúdo publicado será com foco na
                      diversade e inclusão.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Card style={{ minHeight: 140, textAlign: "center" }}>
                  <CardContent>
                    <Avatar
                      style={{
                        backgroundColor: yellow[400],
                        margin: "0 auto"
                      }}
                    >
                      <EmojiPeopleIcon style={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ marginTop: 10 }}
                    >
                      <b>Aumente seu Networking</b>
                    </Typography>
                    <Typography variant="body2" component="p">
                      Estamos construíndo uma comunidade para você conhecer
                      novas pessoas com interesse em comum.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={4} sm={4} xs={12}>
            <Card style={{ minHeight: 140, marginTop: 78 }}>
              <CardContent>
                <div style={{ margin: "0 auto", textAlign: "center" }}>
                  <img
                    src="/images/banner-robot.png"
                    alt="pessoas construindo um robo"
                    width="90%"
                  />
                </div>
                <Typography variant="h6" component="h2">
                  <b>Criar conta</b>
                </Typography>
                <Typography variant="body2" component="p">
                  Utilize uma de suas redes para se conectar.
                </Typography>
                <Button className={classes.button}>
                  <GoogleIcon style={{ fontSize: 16, marginRight: 10 }} />
                  Google
                </Button>
                <Button
                  className={classes.button}
                  style={{ backgroundColor: blue[500], borderColor: blue[700] }}
                >
                  <LinkedinIcon style={{ fontSize: 16, marginRight: 10 }} />
                  Linkedin
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};
export default SignUp;
