import React from "react";

import { Typography, Container, Box, Link } from "@material-ui/core";
import RoundedButton from "../../Form/RoundedButton/RoundedButton";
import useStyles from "./Banner.styles";

const Banner = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <div className={classes.intro}>
          <Typography variant="h4" component="h1">
            Em busca de mais{" "}
            <span className={classes.rainbow}>Diversidade</span> na Tencnologia
          </Typography>
          <Box mt={2}>
            <Typography variant="h6" component="p">
              Crie seu perfil ou encontre pessoas para sua empresa.
            </Typography>
          </Box>
          <Box mt={4}>
            <Link href="/signup">
              <RoundedButton>Criar Perfil</RoundedButton>
            </Link>
            <Link href="/contact">
              <RoundedButton>Encontrar Pessoas</RoundedButton>
            </Link>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Banner;
