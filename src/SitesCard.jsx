import React, { useState } from "react";
import { Box, Card, Dialog, makeStyles } from "@material-ui/core";


import Plug from "./Imgs/plugSVG.svg";
import Attic from "./Imgs/atticSVG.svg";
import Basement from "./Imgs/basementSVG.svg";
import Drainage from "./Imgs/drainageSVG.svg";
import Gutter from "./Imgs/gutterSVG.svg";
import HeatCool from "./Imgs/heatcoolSVG.svg";
import Plumb from "./Imgs/plumbSVG.svg";
import Roof from "./Imgs/roofSVG.svg";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    "&:hover": {
      backgroundColor: palette.secondary.light,
    },
  },

}));
export function DisplayService() {
  const styles = useStyles();
  const [selected, setSelected] = useState();

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      style={{ paddingBottom: "10px" }}
    >
      <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          padding="25px"
          width="300px"
          letterSpacing={0.3}
        >
          <img
            alt=""
            src={selected?.image}
            width="120px"
            height="120px"
            style={{ paddingBlock: "12px" }}
          />

          <Box
            textAlign="justify"
            flexWrap="wrap"
            style={{
              fontWeight: "lighter",
              letterSpacing: 1,
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            {selected?.textBack}
          </Box>
        </Box>
      </Dialog>

      {servicesCard.map(({ image, textBack, textFront }, index) => (
        <div key={index} title={textBack}>
          <Card
            onClick={() => setSelected({ image, textBack, textFront })}
            style={{ margin: "8px", cursor: "pointer" }}
            classes={{ root: styles.card }}
          >
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              flexDirection="column"
              width="230px"
              height="180px"
            >
              <img alt="" src={image} width="50px" height="50px" />

              <Box fontWeight="lighter" lineHeight={4} fontSize="1.1rem">
                {textFront}
              </Box>
            </Box>
          </Card>
        </div>
      ))}
    </Box>
  );
}



export const servicesCard = [
  {
    image: Plug,
    textFront: "This area.. Egg Harbor",
    textBack: " The site will come up with contact info and imageThe condition of readily accessible service panel components, note the presence of GFCIs, AFCIs, smoke alarms and check the operation of representative outlets, switches, fixtures and other devices. ",
  },
  {
    image: "",
    textFront: "Sicklerville",
    textBack: "  sites in area   ing, cracked, or bowed walls, peeling or pitted paint, as well as look for signs of leakage, damage, or sagging all of which may be signs of defects in the foundation or underlying structure of the home, examine ceilings for cracks that may indicate structural problems as well as look for any signs that moisture is getting into the ceiling from the attic or rooms above. Termite damage is also on an inspector’s radar; peeling or pitted paint may indicate termite damage underneath. We will also examine the floors. Sloping, uneven floors may mean the structure underneath is damaged due to ground settling, moisture, or termites.",
  },
  {
    image: "",
    textFront: "whereevr else",
    textBack: "The inspector will assess visible siding, trim, windows, and doors for proper construction and function; looking for signs of leakage and damage, sagging, missing components, air gaps, or other structural concerns. Windows will be operated to determine function..",
  },
  {
    image: Basement,
    textFront: "Basement & Foundation",
    textBack: "sites in area     e of excess moisture and leaks, especially in unfinished basements. Visible load-bearing framing components, foundation walls, slabs, piers and columns and accessible structural components will be assessed for function and presence of damage, decay or defects. past flooding and water damage, and moisture due to poor ventilation or insulation water penetration at below grade areas",
  },
  {
    image: Drainage,
    textFront: "Grading & Drainage",
    textBack: "Ideally your land should slope away from the foundation of your home. A failure in any of the elements of your homes drainage system can lead to major structural damage. Faulty gutters or grading that doesn’t have the appropriate fall away from the structure will lead to water pooling around the foundation which could lead to foundation damage in the long-term.",
  },
  {
    image: Roof,
    textFront: "Roof, Flashings, & Trim",
    textBack: 
    " We assess the condition of visible roof covering materials, (shingles), flashings at roof penetrations and valleys, skylights, chimneys, gutters and downspouts for proper function, looking for evidence of leakage or worn, damaged, or missing components. We also utilize drone technology when unable to safely access the roof to provide a full evaluation.",
  },
  {
    image: Gutter,
    textFront: "Gutters & Downspouts",
    textBack: "A no-good gutter can mean anything from one that just needs a bit of cleaning to one that is completely structurally unsound. Without a proper gutter water carelessly rolls off the roof and can easily make its way under the shingles or into the siding. The longer it sits there the more damage it will do and in the long-term it can cause some major issues.",
  },
  {
    image: HeatCool,
    textFront: "Heating & Cooling",
    textBack: " The function and condition of visible components of the central AC or heat pump system including condensers and air handlers, and the distribution ductwork will be assessed. Your inspector will look for air gaps at openings near electrical wiring, HVAC system connections, as well as other places. Identifying and closing these gaps will help make your home more energy efficient ",
  },
  {
    image: Plumb,
    textFront: "Interior Plumbing System",
    textBack: "We inspect visible water supply piping, distribution piping, waste system piping, water heaters and plumbing fixtures. We check plumbing fixtures and built-in appliances looking for water pressure or drainage issues and visible signs of leaks. Also includes inspection of the physical condition and operation of piping to asses flow, drainage and leakage. ",
  },
  {
    image: Attic,
    textFront: "Attic & Visible Insulation",
    textBack: " A number of structural issues are discovered in the attic and crawl spaces. Damaged (cracked or loose) roof rafters, floor joists and leaking foundations are revealed when these spaces are inspected. The condition of insulation or inadequate ventilation can be discovered inspecting these spaces.",
  },
];
