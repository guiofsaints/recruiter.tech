import { makeStyles, createStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(() =>
  createStyles({
    titleIntro: {
      fontWeight: 400,
      marginBottom: 20,
      lineHeight: "1.2em",
      letterSpacing: "-0.02em",
      textAlign: "center",
      fontSize: "1.5rem",
      "@media (max-width:950px)": {
        fontSize: "1.5rem"
      }
    },
    banner: {
      "@media (max-width:950px)": {
        marginTop: 0
      }
    },
    titleBanner: {
      lineHeight: "1.2em",
      letterSpacing: "-0.02em",
      fontWeight: "lighter",
      textAlign: "center",
      color: "#fff",
      fontSize: "2.3rem",
      "@media (max-width:950px)": {
        fontSize: "1.5rem"
      }
    },
    imgBanner: {
      textAlign: "center",
      marginBottom: 60,
      "@media (max-width:950px)": {
        marginTop: 0
      }
    },
    button: {
      borderColor: pink.A700,
      borderRadius: 20,
      borderWidth: "0 0 6px",
      backgroundColor: pink.A400,
      color: "#fff",
      fontWeight: "bold",
      "&:hover": {
        color: "#fff",
        borderColor: "#404040"
      },
      width: 180,
      fontSize: "0.7rem",
      padding: 10,
      "@media (max-width:950px)": {
        fontSize: "0.9rem",
        width: "300px"
      },
      backgroundClip: "padding-box",
      borderStyle: "solid"
    }
  })
);

export default useStyles;
