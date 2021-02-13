import { makeStyles, createStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(() =>
  createStyles({
    titleIntro: {
      fontWeight: "lighter",
      marginTop: 30,
      marginBottom: 30,
      lineHeight: "1.2em",
      letterSpacing: "-0.02em",
      fontSize: "2.5rem",
      "@media (max-width:950px)": {
        fontSize: "1.5rem",
        textAlign: "center"
      }
    },
    titleBanner: {
      lineHeight: "1.2em",
      letterSpacing: "-0.02em",
      fontSize: "2.5rem",
      fontWeight: "lighter",
      "@media (max-width:950px)": {
        marginTop: 40,
        fontSize: "1.5rem",
        textAlign: "center"
      }
    },
    boxBanner: {
      background:
        "linear-gradient(90deg, #393939 0%, #303030 35%, #303030 100%)",
      marginTop: -40,
      borderRadius: 10
    },
    imgBanner: {
      textAlign: "center",
      marginTop: 60,
      marginBottom: 10,
      "@media (max-width:950px)": {
        marginTop: 40
      }
    },
    button: {
      borderColor: pink.A400,
      borderRadius: 40,
      backgroundColor: pink.A400
    }
  })
);

export default useStyles;
