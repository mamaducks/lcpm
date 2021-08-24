import { Box, Card, CardContent, CardMedia, Typography, Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
// import { BusinessInfoButton } from "../../Components/Schedule/BusinessInfoButton";
import MapImage from "./Imgs/mapNJ.png";

import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";
import EmmaLogo from "./Imgs/newEmmaLogo.png";

const useStyles = makeStyles(({ theme }) => ( {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    // paddingLeft: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
  },
  // container: {
  //   position: 'relative',
  //   textAlign: 'center',
  //   color: 'white',
  // },
  // topasad: {
  //   color: 'blue',
  //     position: 'absolute',
  //     top: '10%',
  //     left: '50%',
  //   },

media: {
    display: 'flex',
    height: 100,
    objectFit: 'contain',
    alignItems: 'left',

},
  
  hrInfo: {
    lineHeight: "2",
  },
  hours: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontWeight: "lighter",
    "& div": {
      fontWeight: "bold",
      paddingInline: "10px",
      color: "#494649",
    },
  },
}));



export const SERVICES = [
  "Roof",
  "Structural Components",
  "Attic, Ventilation and Insulation",
  "Exterior Cladding",
  "Porch & Deck",
  "Attached Garage",
  "Foundation",
  "Basement / Crawlspace",
  "Electrical System",
  "Plumbing System",
  "HVAC System Interior",
];

export function HomePage() {
  return (
    <div>
      dis be the homeee page
      <div>
        
        <Header />
        click takes you to sites page
      </div>
      <div>criteria for applying</div>
      <ul
            style={{
              listStyleType: "square",
              fontWeight: "300",
              // lineHeight: "1",
              fontSize: "1.1rem",
              // letterSpacing: "1px",
            }}
          >
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
      <div>request more information</div>
      <div>a form to fill in</div>
      <div>start application</div>
      <div>a button that opens the application form</div>
      <ProfileCard/>
      <ContactMap/>
      <CardContent>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        fontSize="2rem"
        minHeight="80px"
        justifyContent="space-between"
      >
        image
        <Typography
          color="textPrimary"
          variant="subtitle1"
          paddingTop="10px"
          paddingBottom="10px"
          gutterBottom
        >
          the wrods too o
        </Typography>
      </Box>
    </CardContent>
    </div>
  );
}

function Header(props) {
  const classes = useStyles();

  return (  
          <Card className={classes.card}>
              <div>
                  <CardContent className={classes.content}>
                    <div style={{position: 'relative'}} >
                      <CardMedia
                          component="img"
                          className={classes.media}
                          image="https://www.w3schools.com/css/img_lights.jpg"
                      />
                      <div style={{
                        position: 'absolute', 
                        color: 'white', 
                        top: 8, 
                        left: '50%', 
                        transform: 'translateX(-50%)'
                      }} >Properties</div>
                    </div>
                  </CardContent>
              </div>                
          </Card>        
  );
}

function ProfileCardInfo({ Icon, info }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>

      <ListItemText>{info}</ListItemText>
    </ListItem>
  );
}

export function ProfileCard() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });

  return (
    <Container>
      <Paper style={{ padding: 5, marginBottom: 20 }}>
        <Box display="flex" justifyContent="space-evenly">
          <div>start application</div>
          {isWide && (
            <img
              alt=""
              src={EmmaLogo}
              width="320"
              height="245"
              style={{ paddingLeft: 25 }}
            />
          )}

          <div style={{ padding: 25, paddingRight: 30, alignSelf: "center" }}>
            <ProfileCardInfo Icon={IoIosPhonePortrait} info="856-777-7777" />

            <ProfileCardInfo
              Icon={AiOutlineMail}
              info="lcpm@gmail.com"
            />

            <ProfileCardInfo Icon={IoMdPin} info="Sicklerville, NJ" />
          </div>
        </Box>
      </Paper>
    </Container>
  );
}


export function Info({ Icon, info }) {
  return (
    <CardContent>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        fontSize="2rem"
        minHeight="80px"
        justifyContent="space-between"
      >
        {Icon}
        <Typography
          color="textPrimary"
          variant="subtitle1"
          paddingTop="10px"
          paddingBottom="10px"
          gutterBottom
        >
          {info}
        </Typography>
      </Box>
    </CardContent>
  );
}

export const ContactMap = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
  });
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      alignItems="center"
    >
      {isWide && <img alt="" src={MapImage} width="60%" height="auto" />}
      <CardContent>
        <Info Icon={<FaMobileAlt />} info="p: 609-670-0451" />
        <Info Icon={<IoLocationOutline />} info="Berlin, NJ 08009" />
        <Info
          Icon={<IoMailOutline />}
          info="BuyerBewareHomeInspections@gmail.com"
          paddingBottom="5px"
        />
        {/* <BusinessInfoButton /> */}
      </CardContent>

      {/* <Hours /> */}
    </Box>
  );
};