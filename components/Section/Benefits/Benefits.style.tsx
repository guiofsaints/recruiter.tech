import { makeStyles, createStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      minWidth: 250,
      minHeight: 320,
      borderRadius: 10,
      margin: 10
    }
  })
);

export default useStyles;
