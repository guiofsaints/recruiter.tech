import React from "react";

import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography
} from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    }
  })
);

const SignUp = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Header />
      {/* Register Component */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "10vh" }}
      >
        <Grid item>
          <h1>Por que criar uma conta?</h1>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Typography>
                    Truncation should be conditionally applicable on this long
                    line of text as this is a much longer line than what the
                    container can support.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};
export default SignUp;
