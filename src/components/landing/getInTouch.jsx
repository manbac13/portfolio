import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BlinkingDot from "components/common/dot";
import { ColorModeContext } from "contexts/themeContext";
import { Mail } from "lucide-react";
import { useContext, useState } from "react";

const GetInTouch = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const { togglePage } = useContext(ColorModeContext);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ py: 7.5, px: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            onClick={() => togglePage("home")}
            sx={{ cursor: "pointer" }}
          >
            Home
          </Link>
          <Typography color="text.primary">Contact</Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? 4 : 6,
            mt: 7.5,
          }}
        >
          <Box
            sx={{
              border: (theme) => `1px solid ${theme.palette.divider}`,
              px: 2,
              py: 0.5,
              borderRadius: "999px",
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <BlinkingDot animation={true} />
              <Typography sx={{ ml: 1 }}>Available for new projects</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant={isMobile ? "h2" : "h1"}
              textAlign={"center"}
              sx={{ fontFamily: '"Lora", serif' }}
            >
              Let&apos; Create Something{" "}
              <Box
                component={"br"}
                sx={{ display: { xs: "none", md: "inherit" } }}
              />{" "}
              Extraordinary Together
            </Typography>

            <Typography
              color="textSecondary"
              sx={{ width: { xs: "90%", sm: "85%", md: "55%" } }}
              margin={"auto"}
              textAlign={"center"}
              mt={2}
            >
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you. Whether it&apos;s a collaboration, a question, or
              an opportunity — my inbox is always open.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 1.5 : 3,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              py: 1,
              px: 2,
              borderRadius: 4,
            }}
          >
            <Mail size={isMobile ? 28 : 36} />
            <Box>
              <Typography color="textSecondary">Email me at</Typography>
              <Typography variant="h5">manishbachhav98@gmail.com</Typography>
            </Box>
            <Button
              size={isMobile ? "small" : "medium"}
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText("manishbachhav98@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              {copied ? "Copied" : "Copy"}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetInTouch;
