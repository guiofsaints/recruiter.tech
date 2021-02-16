import {
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem
} from "@material-ui/core";
import React from "react";
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
            marginTop: 10
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
      </Container>
    </section>
  );
};

export default Benefits;
