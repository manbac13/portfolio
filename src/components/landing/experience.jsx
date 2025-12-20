import { Box, Divider, Grid, Typography } from "@mui/material";
import { experincesData } from "utils/data";

const Experience = () => {
  return (
    <>
      <Box sx={{ px: 3, pt: 2.5 }}>
        <Typography sx={{ mb: 2.5 }}>Experiences</Typography>
      </Box>
      <Divider light={true} />

      <Box sx={{ my: 5, px: 3 }}>
        {experincesData.map((item) => (
          <Grid container key={item.id} my={4} spacing={{ xs: 0, sm: 1 }}>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Typography color="textDisabled">{item.timePeriod}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 9 }}>
              <Typography sx={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                {`${item.role} at `}
                <span style={{ fontWeight: 700 }}>{item.comapany}</span>
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default Experience;
