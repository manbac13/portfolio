import { Box, Stack, Typography } from "@mui/material";
import BlinkingDot from "components/common/dot";

const Location = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", py: 1, px: 2 }}
      >
        <Typography variant="body2">Pune, India</Typography>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <BlinkingDot />
          <Typography variant="body2">Available to work</Typography>
        </Stack>
      </Box>
    </>
  );
};
export default Location;
