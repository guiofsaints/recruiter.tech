import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    background:
      "linear-gradient(90deg, #303030 0%, rgba(48,48,48,1) 60%, #202020 100%)",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: "10px",
    marginLeft: "0"
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
