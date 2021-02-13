import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  footer: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    color: "#fff"
  },
  link: {
    color: blue.A200
  }
}));

export default useStyles;
