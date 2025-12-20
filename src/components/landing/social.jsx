import { Box, Button, Stack, Typography } from "@mui/material";

const SocialSection = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>Find me on</Typography>
          <Stack direction={"row"} spacing={1}>
            {socialButtons.map((btn) => (
              <Button
                key={btn.title}
                sx={{ color: (theme) => theme.palette.text.primary }}
                compocomponent="a"
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn.title}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default SocialSection;

const socialButtons = [
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/manish-bachhav-5a89201a0/",
  },
  { title: "Github", link: "https://github.com/manbac13" },
];
