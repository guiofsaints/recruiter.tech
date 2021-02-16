import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import React from "react";
import RoundedButton from "../../Form/RoundedButton";
import useStyles from "./Benefits.style";

const Benefits = (): JSX.Element => {
  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="md">
        <List
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            overflow: "auto",
            marginTop: 10,
            alignItems: "center"
          }}
        >
          <ListItem>
            <Card className={classes.card}>
              <CardContent>X</CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card className={classes.card}>
              <CardContent>X</CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card className={classes.card}>
              <CardContent>X</CardContent>
            </Card>
          </ListItem>
        </List>
        <div className={classes.journey}>
          <Box mt={4}>
            <Typography variant="h6" component="h2">
              Vamos começar sua jornada?
            </Typography>
          </Box>
          <Box mt={2} mb={4}>
            <Link href="/signup">
              <RoundedButton>Criar Perfil</RoundedButton>
            </Link>
            <Link href="/contact">
              <RoundedButton>Encontrar Pessoas</RoundedButton>
            </Link>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
