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
          <link rel="canonical" href="https://akshatmittal.com/twitter-hashflag-browser/" />

          <link rel="shortcut icon" href="https://akshatmittal.com/twitter-hashflag-browser/favicon.png" />
          <link
            rel="icon"
            type="image/png"
            href="https://akshatmittal.com/twitter-hashflag-browser/favicon.png"
            sizes="192x192"
          />
          <link rel="apple-touch-icon" href="https://akshatmittal.com/twitter-hashflag-browser/favicon.png" />
          <link rel="android-touch-icon" href="https://akshatmittal.com/twitter-hashflag-browser/favicon.png" />
          <link rel="windows-touch-icon" href="https://akshatmittal.com/twitter-hashflag-browser/favicon.png" />

          <meta name="title" content="Twitter Hashflag Browser" />
          <meta
            name="description"
            content="Browse all current Twitter hashflags in a simple and easy to use interface!"
          />
          <meta
            name="keywords"
            content="twitter, twitter hashflag, hashflag, hashflag browser, hashflags, hashflags browser, twitter hashflags browser"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://akshatmittal.com/twitter-hashflag-browser/" />
          <meta property="og:title" content="Twitter Hashflag Browser" />
          <meta
            property="og:description"
            content="Browse all current Twitter hashflags in a simple and easy to use interface!"
          />
          <meta property="og:image" content="https://akshatmittal.com/twitter-hashflag-browser/social.png" />
          <meta property="og:site_name" content="Akshat Mittal" />
          <meta property="fb:admins" content="100000581280466" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://akshatmittal.com/twitter-hashflag-browser/" />
          <meta property="twitter:title" content="Twitter Hashflag Browser" />
          <meta
            property="twitter:description"
            content="Browse all current Twitter hashflags in a simple and easy to use interface!"
          />
          <meta property="twitter:image" content="https://akshatmittal.com/twitter-hashflag-browser/social.png" />
          <meta property="twitter:site" content="@iakshatmittal" />
          <meta property="twitter:creator" content="@iakshatmittal" />
        </Head>
        <Menu toggleDarkMode={toggleDarkMode} />
        <Header />
        <Content />
        <Footer />
      </GeistProvider>
    </JssProvider>
  );
}
