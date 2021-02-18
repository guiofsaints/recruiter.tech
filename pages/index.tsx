import React from "react";

import { signIn, signOut, useSession } from "next-auth/client";
import { Box, Button, Container } from "@material-ui/core";
import Footer from "../components/Section/Footer";
import Benefits from "../components/Section/Benefits";
import Header from "../components/Section/Header";
import Banner from "../components/Section/Banner";

const Index = (): JSX.Element => {
  const [session, loading] = useSession();

  console.log(session && session.user ? session.user : {});

  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Footer />
      <Container maxWidth="md">
        <Box mt={2} alignContent="center" alignItems="center">
          {session && (
            <>
              {session.user ? session.user.name : "Sem nome"} <br />
              {session.user.email} <br />
              <Button onClick={() => signOut()}>Sign out</Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Index;
