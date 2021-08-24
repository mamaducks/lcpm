import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import routes from "./Routes";
import { MenuButton } from "./MenuButton";
import EmmaLogo from "./Imgs/emmaLogoSmall.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  image: {
    height: "auto",
    maxWidth: "120px",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  logoText: {
    display: "inline-flex",
    flexDirection: "column",
    fontSize: "0.8em",
  },
  logoTextContainer: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  text: {
    fontSize: "clamp(1rem, 2.5vw, 2rem)",
  },
}));

export function AppBarHeader() {
  const classes = useStyles();
  const isWide = useMediaQuery({
    query: "(min-width: 48rem)",
  });

  return (
    <>
      <Box margin="5px" display="flex" height="120px" alignItems="center">
        <img alt="" src={EmmaLogo} height="107px" className={classes.image} />
        <div className={classes.logoTextContainer}>
          <div className={classes.logoText}>
            <Typography
              variant="h5"
              align="right"
              noWrap="true"
              style={{ fontSize: "1.9em", lineHeight: "1.2" }}
            >
              {" "}
              Lower County
            </Typography>

            <Typography
              variant="h6"
              align="right"
              style={{ fontSize: "1.2em", fontWeight: "300" }}
            >
              Property Management
            </Typography>
          </div>
        </div>

        {!isWide && <MenuButton />}

      </Box>

      {isWide && (
        <Box style={{ backgroundColor: "#a71976", padding: "1px" }}>
          <Box display="flex" color="white" justifyContent="space-between">
            <Tabs value={window.location.pathname} variant="scrollable">
              {Object.values(routes).map(({ link, label }) => (
                <Tab
                  key={link}
                  label={label}
                  href={link}
                  component="a"
                  value={link}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      )}
    </>
  );
}
