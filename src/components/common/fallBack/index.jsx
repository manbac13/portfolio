import { CircularProgress, Stack, Typography } from "@mui/material";

const Fallback = () => {
  return (
    <>
      <Stack
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <CircularProgress size={"24px"} />
          <Typography>Loading...</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Fallback;
