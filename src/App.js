import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBarHeader } from "./AppBar";
import { Footer } from "./Footer";
import { Router } from "./Router";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f3f1f2",
    overflowX:'hidden'
  },
  footer: {
    backgroundColor: "#e6d1dd",
  },
});

export function App() {
  const classes = useStyles();
  return (
    <>
      <AppBarHeader />
      <div className={classes.container}>
        <Router />
      </div>
      <Footer className={classes.footer} />
    </>
  );
}
