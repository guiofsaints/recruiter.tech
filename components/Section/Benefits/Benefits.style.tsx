import { makeStyles, createStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: pink[900],
      borderRadius: 14,
      borderWidth: "0 0 4px",
      borderStyle: "solid",
      backgroundColor: pink.A400,
      color: "#fff",
      padding: 10,
      minWidth: 100,
      marginLeft: 4,
      marginRight: 4,
      fontWeight: "bold",
      backgroundClip: "padding-box",
      "@media (max-width:950px)": {},
      "&:hover": {
        color: "#fff",
        borderColor: "#404040"
      }
    }
  })
);

export default useStyles;
