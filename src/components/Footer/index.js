import React from "react";
import { Text } from "@geist-ui/react";
import makeStyles from "../makeStyles";

const useStyles = makeStyles((ui) => ({
  root: {
    borderTop: `solid 1px ${ui.palette.accents_2}`,
    padding: "16px 0",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    width: ui.layout.pageWidthWithMargin,
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: "0 auto",
  },
  footer: {
    width: "100%",
    textAlign: "center",
    color: `${ui.palette.secondary} !important`,
  },
}));

const Heading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Text className={classes.footer}>
          Created by{" "}
          <a href="https://akshatmittal.com" target="_blank">
            Akshat Mittal
          </a>{" "}
          with help from Hashflag Archive.
        </Text>
      </div>
    </div>
  );
};

export default Heading;
