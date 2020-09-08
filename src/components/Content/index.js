import React, { useState, useEffect } from "react";
import { Input, Tabs, Spinner, useTabs } from "@geist-ui/react";
import makeStyles from "components/makeStyles";
import HashflagCard from "components/Cards/HashflagCard";
import { VirtuosoGrid } from "react-virtuoso";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const useStyles = makeStyles((ui) => ({
  root: {
    backgroundColor: ui.palette.accents_1,
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
  },
  content: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: `0 ${ui.layout.pageMargin}`,
    transform: "translateY(-35px)",
  },
  menu: {
    backgroundColor: ui.type === "light" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
    margin: `12px 0`,
    padding: "0 12px",
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
  },
  row: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 1,
    maxWidth: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  container: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8pt",
    padding: "8pt",
  },
  [`@media screen and (max-width: ${ui.layout.pageWidthWithMargin})`]: {
    container: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  singleHolder: {
    width: "100%",
    display: "inline-block",
  },
  tabs: {
    marginTop: "16pt",
    ["& header"]: {
      justifyContent: "center",
    },
  },
  loadingContainer: {
    margin: "32pt 0",
    display: "flex",
    justifyContent: "center",
  },
}));

const transformData = (e) => {
  const final = {};
  e.forEach((f) => {
    if (typeof final[f.campaignName] !== "object") {
      final[f.campaignName] = {};
    }
    if (typeof final[f.campaignName].hashtags !== "object") {
      final[f.campaignName].hashtags = new Array();
    }
    final[f.campaignName].hashtags.push(f.hashtag);
    final[f.campaignName].assetUrl = f.assetUrl;
    final[f.campaignName].campaignName = f.campaignName;
    final[f.campaignName].startingTimestampMs = parseFloat(f.startingTimestampMs);
    final[f.campaignName].endingTimestampMs = parseFloat(f.endingTimestampMs);
  });
  return final;
};

const Content = ({}) => {
  const classes = useStyles();
  const { state, setState, bindings } = useTabs("recent");

  const [rawData, setRawData] = useState([]);

  const [hashflags, setHashflags] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [hashflagKeys, setHashflagKeys] = useState([]);

  useEffect(() => {
    const rightNow = dayjs().utc().format("YYYY-MM-DD-HH");
    fetch(`https://pbs.twimg.com/hashflag/config-${rightNow}.json`)
      .then((e) => e.json())
      .then((final) => {
        setRawData(final);
      });
  }, []);

  useEffect(() => {
    if (rawData.length > 0) {
      if (state === "recent") {
        setHashflags(transformData(rawData.sort((a, b) => b.startingTimestampMs.localeCompare(a.startingTimestampMs))));
      } else {
        setHashflags(transformData(rawData.sort((a, b) => a.endingTimestampMs.localeCompare(b.endingTimestampMs))));
      }
      setIsLoading(false);
    }
  }, [rawData, state]);

  useEffect(() => {
    const filtered = Object.keys(hashflags).filter((key) => {
      const current = hashflags[key];
      return (
        current.campaignName.toLowerCase().indexOf(searchTerm) > -1 ||
        current.hashtags.find((e) => e.toLowerCase().indexOf(searchTerm) > -1) ||
        false
      );
    });

    setHashflagKeys(filtered);
  }, [hashflags, searchTerm]);

  return (
    <div className={classes.root}>
      <div className={[classes.menu]}>
        <div className={classes.content}>
          <Input
            placeholder="Search by campaign name or hashtag"
            width="100%"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <Tabs {...bindings} hideDivider className={classes.tabs}>
            <Tabs.Item label="Recently Started" value="recent" />
            <Tabs.Item label="Ending Soon" value="ending" />
          </Tabs>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.row}>
          {isLoading && (
            <div className={classes.loadingContainer}>
              <Spinner size="large" />
            </div>
          )}
          {!isLoading && (
            <VirtuosoGrid
              totalCount={hashflagKeys.length}
              itemClassName={classes.singleHolder}
              listClassName={classes.container}
              item={(index) => <HashflagCard key={hashflagKeys[index]} data={hashflags[hashflagKeys[index]]} />}
              style={{ height: "700px", width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
