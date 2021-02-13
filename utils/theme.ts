import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark" // light
  }
});

export default responsiveFontSizes(theme);
