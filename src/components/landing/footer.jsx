import { Box, Button, Stack, Typography } from "@mui/material";
import { ColorModeContext } from "contexts/themeContext";
import { useContext } from "react";

const Footer = () => {
  const { togglePage } = useContext(ColorModeContext);
  return (
    <>
      <Box sx={{ mt: 10, mb: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            fontFamily: '"Lora", serif',
            textAlign: "center",
            maxWidth: { xs: "90%", sm: "85%", md: "70%" },
            margin: "auto",
            mb: 1.5,
          }}
        >
          Thoughtful design makes{" "}
          <Box
            component={"br"}
            sx={{ display: { xs: "none", md: "inherit" } }}
          />{" "}
          great products possible
        </Typography>

        <Typography
          textAlign={"center"}
          color="textDisabled"
          sx={{
            maxWidth: { xs: "90%", sm: "85%", md: "100%" },
            margin: "auto",
            fontSize: "1rem",
            mb: 4,
          }}
        >
          I partner with teams to simplify complexity,
          <Box
            component={"br"}
            sx={{ display: { xs: "none", md: "inherit" } }}
          />{" "}
          clarify experiences, and deliver with confidence.
        </Typography>

        <Stack direction={"row"} justifyContent={"center"} mb={4}>
          <Button variant="contained" onClick={() => togglePage("contact")}>
            Contact me
          </Button>
        </Stack>

        <Typography
          textAlign={"center"}
          color="textSecondary"
          variant="h1"
          sx={{ fontFamily: '"Bad Script", cursive', letterSpacing: "2px" }}
          pt={1.5}
        >
          manish bachhav
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
