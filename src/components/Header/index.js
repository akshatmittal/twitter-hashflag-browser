import React from "react";
import { Avatar, Button, Text, Link, Tabs } from "@geist-ui/react";
import makeStyles from "../makeStyles";

const useStyles = makeStyles((ui) => ({
  root: {
    // borderBottom: `solid 1px ${ui.palette.accents_2}`,
    marginTop: "60px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: ui.layout.pageWidthWithMargin,
    maxWidth: "100%",
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 3)`,
    boxSizing: "border-box",
    margin: "0 auto",
    alignItems: "center",
  },
  avatar: {
    width: "100px !important",
    height: "100px !important",
    marginBottom: "30px !important",
    border: "none !important",
  },
  name: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    lineHeight: 1,
  },
  [`@media screen and (max-width: ${ui.layout.pageWidthWithMargin})`]: {
    avatar: {
      width: "80px !important",
      height: "80px !important",
      marginRight: "20px !important",
    },
    username: {
      fontSize: 24,
    },
  },
  integrationsTitle: {
    textTransform: "uppercase",
    color: `${ui.palette.accents_5} !important`,
    fontWeight: 500,
    fontSize: 12,
    margin: 0,
  },
}));

const Heading = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Avatar isSquare className={classes.avatar} src={"images/twitter.svg"} />
        <div className={classes.name}>
          <div className={classes.title}>
            <Text h2 className={classes.username}>
              Twitter Hashflag Browser
            </Text>
          </div>
          <div>
            <Text className={classes.integrationsTitle}>Browse all current Twitter hashflags!</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
