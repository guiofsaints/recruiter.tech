import React from "react";

import { Helmet } from "react-helmet";

// Modules
import { AppProps } from "next/app";

// MUI Core
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// Utils
import theme from "../themes/dark.style";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          (err) => {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "pt-BR" }}
        title="Recruiter - Mais diversidade no mundo da Tecnologia."
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
          {
            property: "og:title",
            content: "Recruiter - Mais diversidade no mundo da Tecnologia."
          }
        ]}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
