import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
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
