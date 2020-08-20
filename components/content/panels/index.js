import React, { useState, useContext } from "react";
import Context from "../../../store/context";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AssessmentIcon from "@material-ui/icons/Assessment";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ReplayIcon from "@material-ui/icons/Replay";
import LanguageIcon from "@material-ui/icons/Language";
import EmailIcon from "@material-ui/icons/Email";

import SwipeableViews from "react-swipeable-views";
import TabPanel from "./Panel";
import Sizes from "./features/Sizes";
import LogginScreen from "../LogginScreen";

import { startLogout } from "../../../actions/auth";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: "#0a0",
  },
  tab: {
    minWidth: "33%",
    opacity: 0.5,
  },
  indicator: {
    background: "#4593aa",
  },
  selectedTabIcon: {
    opacity: 1,
  },
  swipeRoot: {
    height: "100%",
    "& > div": {
      height: "100%",
    },
  },
  tabContentRoot: {
    height: "100%",
    "& > div": {
      height: "100%",
    },
  },
}));

export default function () {
  const classes = useStyles();

  const {
    globalState: { login },
    globalDispatch,
  } = useContext(Context);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ color: "#005770" }}
          classes={{ indicator: classes.indicator }}
          scrollButtons="auto"
          variant="scrollable"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            key={"tabs1"}
            className={classes.tab}
            icon={<AssessmentIcon />}
            {...a11yProps(0)}
          />
          <Tab
            key={"tabs2"}
            className={classes.tab}
            icon={<SaveAltIcon />}
            {...a11yProps(1)}
          />
          <Tab
            key={"tabs3"}
            className={classes.tab}
            icon={<ReplayIcon />}
            {...a11yProps(2)}
          />
          <Tab
            key={"tabs4"}
            className={classes.tab}
            icon={<LanguageIcon />}
            {...a11yProps(3)}
          />
          <Tab
            key={"tabs5"}
            className={classes.tab}
            icon={<EmailIcon />}
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.swipeRoot}
      >
        <TabPanel
          className={classes.tabContentRoot}
          key={"tab1"}
          value={value}
          index={0}
        >
          <Sizes />
        </TabPanel>
        <TabPanel
          className={classes.tabContentRoot}
          key={"tab2"}
          value={value}
          index={1}
        >
          {/* download */}

          {/* SHADOWS FOR THE TABLE */}
          {login.isLoggedIn ? (
            <>
              <p>
                Download. This feature will insert all selected options into a
                pdf.
              </p>
              <p> LoggedIn user: {login.profile.name} </p>
              <button
                onClick={() => {
                  startLogout().then(() => {
                    globalDispatch({ type: "LOGOUT", payload: "" });
                  });
                }}
              >
                {" "}
                Sign Out
              </button>
            </>
          ) : (
            <LogginScreen />
          )}
        </TabPanel>
        <TabPanel
          className={classes.tabContentRoot}
          key={"tab3"}
          value={value}
          index={2}
        >
          {/* Start Again */}

          {login.isLoggedIn ? (
            <>
              <p>
                Start new. This feature will reset selected options to default
              </p>
              <p> LoggedIn user: {login.profile.name} </p>
              <button
                onClick={() => {
                  startLogout().then(() => {
                    globalDispatch({ type: "LOGOUT", payload: "" });
                  });
                }}
              >
                {" "}
                Sign Out
              </button>
            </>
          ) : (
            <LogginScreen />
          )}
        </TabPanel>
        <TabPanel
          className={classes.tabContentRoot}
          key={"tab4"}
          value={value}
          index={3}
        >
          {/* language change */}
          {login.isLoggedIn ? (
            <>
              <p>
                Language change. This feature will allow user to change the
                language of the app.
              </p>
              <p> LoggedIn user: {login.profile.name}</p>
              <button
                onClick={() => {
                  startLogout().then(() => {
                    globalDispatch({ type: "LOGOUT", payload: "" });
                  });
                }}
              >
                {" "}
                Sign Out
              </button>
            </>
          ) : (
            <LogginScreen />
          )}
        </TabPanel>
        <TabPanel
          className={classes.tabContentRoot}
          key={"tab5"}
          value={value}
          index={4}
        >
          {/* send email */}

          {login.isLoggedIn ? (
            <>
              <p>
                Send email. This feature will allow user to send an email with
                the current configurations
              </p>
              <p> LoggedIn user: {login.profile.name} </p>
              <button
                onClick={() => {
                  startLogout().then(() => {
                    globalDispatch({ type: "LOGOUT", payload: "" });
                  });
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <LogginScreen />
          )}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
