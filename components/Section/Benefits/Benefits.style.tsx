import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      position: "relative",
      float: "left",
      borderRight: 0,
      borderLeftWidth: 20,
      marginTop: 28,
      marginRight: -20,
      zIndex: 9,
      maxHeight: 340,
      borderStyle: "solid",
      borderImage:
        "linear-gradient(90deg, rgba(48, 48, 48, 1), rgba(0, 0, 0, 0)) 1 100%"
    },
    borderRight: {
      position: "relative",
      float: "right",
      borderLeft: 0,
      borderRight: 20,
      marginTop: 28,
      marginLeft: -20,
      zIndex: 9,
      maxHeight: 340,
      borderStyle: "solid",
      borderImage:
        "linear-gradient(-90deg, rgba(48, 48, 48, 1), rgba(0, 0, 0, 0)) 1 100%"
    },
    scroll: {
      display: "flex",
      flexDirection: "row",
      "@global": {
        "*::-webkit-scrollbar": {
          width: "0px",
          height: "0px"
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 0px rgba(0,0,0,0.00)"
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
          outline: "0px solid slategrey"
        }
      }
    },
    list: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      overflow: "auto",
      marginTop: 10,
      alignItems: "center"
    },
    card: {
      minWidth: 250,
      minHeight: 340,
      borderRadius: 20,
      margin: 10
    },
    cardTitle: {
      fontWeight: 700,
      marginBottom: 20,
      textAlign: "center"
    },
    cardDescription: {
      textAlign: "center"
    },
    journey: {
      magin: "auto",
      textAlign: "center"
    }
  })
);

export default useStyles;
