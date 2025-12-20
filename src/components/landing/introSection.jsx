import { Box, Button, Stack, Typography } from "@mui/material";
import Profile from "assets/profile_image.png";
import { ColorModeContext } from "contexts/themeContext";
import { useContext } from "react";

const IntroSection = () => {
  const { togglePage } = useContext(ColorModeContext);
  return (
    <>
      <Box sx={{ px: 3, mb: 10 }}>
        {/* IMAGE SECTION */}
        <Box sx={{ mb: 8 }}>
          <Box
            component="img"
            src={Profile}
            width={60}
            height={60}
            sx={{
              cursor: "pointer",
              borderRadius: "12px",
              boxShadow: (theme) =>
                theme.palette.mode === "light"
                  ? "0 0 0 3px #fff, rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                  : "none",
              transition: "box-shadow 0.5s ease, transform 0.5s ease",
              "&:hover": {
                boxShadow:
                  "0 0 0 0px #fff, rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                transform: "scale(1.05)",
              },
            }}
          />

          <Typography sx={{ mt: 2 }} variant="h4">
            Manish Bachhav
          </Typography>
          <Typography color="textSecondary">
            Frontend&nbsp; • &nbsp;Full Stack Developer
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h1"
            sx={{ textTransform: "capitalize", fontFamily: '"Lora", serif' }}
          >
            Crafting modern platforms{" "}
            <Box
              component={"br"}
              sx={{ display: { xs: "none", md: "inherit" } }}
            />{" "}
            built for real-world impact
          </Typography>
        </Box>

        <Box>
          <Stack direction={"row"} justifyContent={"flex-start"} spacing={1}>
            <Button variant="contained" onClick={() => togglePage("contact")}>
              Get in touch
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default IntroSection;
