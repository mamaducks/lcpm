import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { groupBy } from "lodash";
import { sites } from "./sitesList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [openSection, setOpenSection] = React.useState("");

  const groupedSitesByCounty = groupBy(sites, "county");

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {Object.entries(groupedSitesByCounty).map(
        ([countyName, sitesInCounty]) => (
          <div key={countyName}>
            <ListItem
              button
              key={countyName}
              onClick={() => setOpenSection(countyName)}
            >
              <ListItemText
                component="a"
                href={`#${countyName}`}
                primary={countyName}
              />
              {countyName === openSection ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse
              in={countyName === openSection}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {sitesInCounty.map(({ site }) => (
                  <ListItem
                    button
                    className={classes.nested}
                    component="a"
                    href={`#${site}`}
                    onClick={() => setOpenSection('')}
                  >
                    <ListItemText primary={site} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        )
      )}
    </List>
  );
}
