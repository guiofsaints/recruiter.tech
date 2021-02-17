import React from "react";

import { Typography, Container, Box } from "@material-ui/core";
import useStyles from "./Banner.styles";

const Banner = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <div className={classes.intro}>
          <Typography variant="h4" component="h1">
            Em busca de mais{" "}
            <span className={classes.rainbow}>Diversidade</span> na Tecnologia
          </Typography>
          <Box mt={2}>
            <Typography variant="h6" component="p">
              Crie seu perfil ou encontre pessoas para sua empresa.
            </Typography>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Banner;
