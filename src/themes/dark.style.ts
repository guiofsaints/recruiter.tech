import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark", // light, dark
    background: {}
  }
});

export default responsiveFontSizes(theme);
