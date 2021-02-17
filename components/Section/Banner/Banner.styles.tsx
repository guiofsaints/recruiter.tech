import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    intro: {
      textAlign: "center",
      marginTop: 10,
      "@media (max-width:950px)": {
        padding: 20
      }
    },
    "@keyframes rainbowAnim": {
      "0%": {
        backgroundPosition: "0% 50%"
      },
      "50%": {
        backgroundPosition: "100% 25%"
      },
      "100%": {
        backgroundPosition: "0% 50%"
      }
    },
    rainbow: {
      backgroundImage:
        "repeating-linear-gradient(-90deg, violet, magenta, skyblue, greenyellow, yellow, orange, red, violet)",
      backgroundSize: "800% 800%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "$rainbowAnim 20s ease infinite"
    }
  })
);

export default useStyles;
