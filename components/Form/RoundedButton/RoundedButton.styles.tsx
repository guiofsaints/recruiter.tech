import { makeStyles, createStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderRadius: 24,
      fontWeight: 600,
      minWidth: 100,
      margin: 4
    }
  })
);

export default useStyles;
