import { Box, CardContent, Divider, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

export function LayoutBox({
  children,
  image,
  heading,
  summary,
  reverse,
  ...props
}) {
  const isWide = useMediaQuery({
    query: "(min-device-width: 600px)",
  });

  return (
    <Box
      display="flex"
      flexDirection={!!reverse ? "row-reverse" : "row"}
      justifyContent="space-evenly"
      alignContent="space-between"
      margin="10px 0"
      width="-webkit-fill-available"
      flex="1 auto"
    >
      {isWide && (
        <img
          alt=""
          src={image}
          width="45%"
          height="auto"
          style={{
            alignSelf: "center",
            minWidth: 300,
            paddingBlock: "10px",
            flexGrow: 0,
          }}
          {...props}
        />
      )}
      <Box>{children}</Box>
    </Box>
  );
}

export function MainContent({ heading, children, ...props }) {
  return (
    <CardContent {...props}>
      <Typography color="textPrimary" variant="h5" gutterBottom>
        {heading}
      </Typography>
      <Divider style={{ margin: "10px 0" }} />

      <Typography variant="body2" component="div">
        {children}
      </Typography>
    </CardContent>
  );
}