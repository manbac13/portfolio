import { Box, Stack, Typography } from "@mui/material";
import { descriptionData } from "utils/data";

const Description = () => {
  return (
    <>
      <Box sx={{ px: 3, py: 5 }}>
        <Stack spacing={3}>
          {descriptionData.map((text) => (
            <Typography key={text.id}>{text.text}</Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Description;
