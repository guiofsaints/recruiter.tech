import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 3),
      "@media (max-width:950px)": {
        margin: 0,
        padding: 0
      }
    },
    paperbox: {
      marginTop: 0,
      "@media (max-width:950px)": {
        marginTop: 0
      }
    },
    paper: {
      maxWidth: "80%",
      margin: `${theme.spacing(4)}px auto`,
      padding: theme.spacing(2),
      borderRadius: 15,
      "@media (max-width:950px)": {
        maxWidth: "90%"
      }
    }
  })
);

export default useStyles;
