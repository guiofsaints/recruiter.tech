import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  logo: {},
  appBar: {
    background: "transparent",
    boxShadow: "none",
    maxWidth: "80%",
    "@media (max-width:950px)": {
      maxWidth: "100%",
      marginBottom: -20
    },
    margin: `auto`,
    marginBottom: 50
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    margin: 0,
    padding: 0
  },
  button: {
    fontSize: "1.3em",
    marginRight: "10px",
    marginLeft: "10px",
    textTransform: "none",
    fontWeight: 400
  }
}));

export default useStyles;
