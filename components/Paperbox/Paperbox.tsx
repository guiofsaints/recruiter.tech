import { Grid, Paper } from "@material-ui/core";
import React from "react";

import useStyles from "./Paperbox.style";

interface PaperboxProps {
  children: React.ReactElement<Element>;
}

const Paperbox = ({ children }: PaperboxProps): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.paperbox}
      >
        <Grid item>
          <div className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>{children}</Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Paperbox;
