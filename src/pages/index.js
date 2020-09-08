import { useState } from "react";
import Head from "next/head";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { JssProvider } from "react-jss";

import Menu from "components/Menu";
import Header from "components/Header";
import Content from "components/Content";
import Footer from "components/Footer";

export default function Home() {
  const [themeType, setThemeType] = useState("light");
  const toggleDarkMode = () => setThemeType(themeType === "dark" ? "light" : "dark");

  return (
    <JssProvider id={{ minify: true }}>
      <GeistProvider theme={{ type: themeType }}>
        <CssBaseline />
        <Head>
          <title>Twitter Hashflag Browser</title>
          <meta
            name="description"
            content="Browse all current Twitter hashflags in a simple and easy to use interface!"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="author" content="Akshat Mittal" />
          <link rel="icon" href="favicon.png" />
          <link rel="shortcut icon" href="favicon.png" />
        </Head>
        <Menu toggleDarkMode={toggleDarkMode} />
        <Header />
        <Content />
        <Footer />
      </GeistProvider>
    </JssProvider>
  );
}
