import React from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

import { VpnKey } from "@material-ui/icons";
import GoogleIcon from "../components/Icons/GoogleIcon";
import Header from "../components/Section/Header";
import Footer from "../components/Section/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "auto"
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
      {/* Register Component */}
      <section className={classes.root}>
        <Container maxWidth="xs">
          <Box display="flex" mt={4} mb={2} justifyContent="center">
            <img
              src="/images/logo-white.png"
              alt="recruiter.tech"
              width={120}
            />
          </Box>
          <Card style={{ minHeight: 140, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h4" component="h1">
                <b>Meu Perfil</b>
              </Typography>
              <Box display="flex" mt={4} mb={4} justifyContent="center">
                <Avatar style={{ width: 100, height: 100 }}>
                  <VpnKey style={{ fontSize: 70 }} />
                </Avatar>
              </Box>
              <Typography variant="body2" component="p">
                Utilize uma de suas redes para criar um perfil ou se conectar.
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
              <Box mt={1}>
                <Typography variant="caption" component="p">
                  Ao entrar você estará concordando com os <b>termos de uso</b>.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default SignUp;
