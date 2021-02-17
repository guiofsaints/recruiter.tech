import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      position: "relative",
      float: "left",
      borderRight: 0,
      borderLeftWidth: 40,
      marginTop: 28,
      marginRight: -40,
      zIndex: 9,
      maxHeight: 340,
      borderStyle: "solid",
      borderImage:
        "linear-gradient(90deg, rgba(100, 100, 100, 1), rgba(0, 0, 0, 0)) 1 100%"
    },
    borderRight: {
      position: "relative",
      float: "right",
      borderRight: 0,
      borderLeftWidth: 40,
      marginTop: 28,
      marginLeft: -40,
      zIndex: 9,
      maxHeight: 340,
      borderStyle: "solid",
      borderImage:
        "linear-gradient(-90deg, rgba(100, 100, 100, 1), rgba(0, 0, 0, 0)) 1 100%"
    },
    scroll: {
      display: "flex",
      flexDirection: "row"
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
      marginBottom: 20
    },
    cardDescription: {
      textAlign: "justify"
    },
    journey: {
      magin: "auto",
      textAlign: "center"
    }
  })
);

export default useStyles;
