import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import ProDialog from "../projectDialog";

const ProjectCard = ({ data, index }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <Box
          sx={{
            overflow: "hidden", // prevents the scale from overflowing
            borderRadius: 2,
          }}
        >
          <Box
            loading="lazy"
            component={"img"}
            src={data.image}
            alt={data.subtitle}
            sx={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </Box>

        <Stack spacing={0.25}>
          <Typography variant="h5">{data.project_name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {data.subtitle}
          </Typography>
        </Stack>
      </Box>

      <ProDialog open={open} onClose={handleClose} id={index} />
    </>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
