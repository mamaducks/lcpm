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
import { DisplayService } from "./SitesCard";
import SelectInput from "@material-ui/core/Select/SelectInput";
import {JumpTo, JumpToMore} from "./JumpTo"
import NestedList from "./NestedList";
const useStyles = makeStyles(({ palette }) => ({
  card: {
    "&:hover": {
      backgroundColor: palette.secondary.light,
    },
  },
}));

// const values = Object.values(sites)
// console.log(values)

export function AboutPage({ filter, setFilter, id }) {
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = useStyles();
  return (
    <Container>
      <NestedList />
      <JumpTo />
      <JumpToMore />
      <Typography
        color="textPrimary"
        variant="h5"
        style={{ paddingLeft: "12px", paddingTop: "8px" }}
      >
        Properties
      </Typography>
      <Divider />
      <SitesNewest />
      <LayoutBox image={About}>
        <MainContent heading="Rules or Criteria">
          to apply for an apartment with one of our sites.
          <br />
          background credit checks $35 money order
        </MainContent>
      </LayoutBox>
      <div>start an application</div>
    </Container>
  );
}

function SitesNewest() {
  const groupedSitesByCounty = groupBy(sites, "county");
  const styles = useStyles();

  return (
    <Paper>
      {Object.entries(groupedSitesByCounty).map(
        ([countyName, sitesInCounty]) => (
          <div key={countyName}>
            <Typography
              color="textPrimary"
              variant="h5"
              style={{ paddingLeft: "12px", paddingTop: "8px" }}
            >
              {countyName} County
            </Typography>

            {sitesInCounty.map(({ site, address, city, zip, phone }) => (
              <Paper
                // onClick={() => setSelected({ image, textBack, textFront })}
                style={{ margin: "8px", cursor: "pointer" }}
                classes={{ root: styles.card }}
              >
                <Box
                  paddingLeft="20px"
                  alignItems="center"
                  // justifyContent="space-evenly"
                  display="flex"
                  // flexDirection="column"
                  // width="230px"
                  // height="180px"
                >
                  <img alt="" src={About} width="250px" height="200px" />
                  <div id={site}>
                    The object you want to link to.
                    <CardContent style={{ paddingLeft: "40px" }}>
                      <Typography color="textPrimary" variant="h5">
                        {site}
                      </Typography>
                      <Divider
                        style={{ marginBottom: "6px" }}
                        id="section_one"
                      />
                      <Typography variant="body2" component="div">
                        <div>{address}</div>
                        <div>
                          {city}, NJ {zip}
                        </div>
                        <div>{phone}</div>
                      </Typography>
                    </CardContent>
                  </div>
                </Box>
              </Paper>
            ))}
            <br />
          </div>
        )
      )}
    </Paper>
  );
}
