import { LayoutBox, MainContent } from "./AppBox";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
// import { DialogButton } from "../../Components/Schedule/RequestsDialogButtons";
// import { Request } from "../../Components/Schedule/InspectionForm";
import About from "./Imgs/houseB.png";
import Check from "./Imgs/checkCert.png";
import {
  Box,
  Container,
  Card,
  Dialog,
  Typography,
  Divider,
  Paper,
  CardContent,
  Button,
  Menu,
  MenuItem,
  Link,
} from "@material-ui/core";
import Attic from "./Imgs/atticSVG.svg";
import { makeStyles } from "@material-ui/core";
import { groupBy } from "lodash";
import { sites } from "./sitesList";
import NestedList from "./NestedList";

export function JumpTo() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
      >
        Jump To:
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {sites.map(({ site }) => (
          <MenuItem component="a" href={`#${site}`} onClick={handleClose}>
            {site}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export function JumpToMore({ name, value }) {
  const groupedSitesByCounty = groupBy(sites, "county");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
      >
        Jump To :
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* {Object.entries(groupedSitesByCounty).map(
        ([countyName, sitesInCounty]) => (
          <div key={countyName}>
                    {sitesInCounty.map(({ site }) => (

      <MenuItem component="a" href={`#${site}`} onClick={handleClose}>
        {site}
      </MenuItem>
       ))}
       <MenuItem component="a" href={`#${countyName}`} onClick={handleClose}>
       {countyName}
     </MenuItem>
     </div>
    ))} */}
        <MenuItem>
          <NestedList />
        </MenuItem>
      </Menu>
    </>
  );
}
