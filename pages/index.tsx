import React from "react";

import { signIn, signOut, useSession } from "next-auth/client";
import { Button } from "@material-ui/core";
import Footer from "../components/Section/Footer";
import Benefits from "../components/Section/Benefits";
import Header from "../components/Section/Header";
import Banner from "../components/Section/Banner";

const Index = (): JSX.Element => {
  const [session, loading] = useSession();

  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Footer />
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      )}
    </>
  );
};

export default Index;
