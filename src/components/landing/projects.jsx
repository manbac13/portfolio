import {
  alpha,
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProjectCard from "components/common/projectCard";
import { useState } from "react";
import { projectData } from "utils/data";

const Projects = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const VISIBLE_COUNT = isMobile ? 2 : 4;
  const FADED_COUNT = isMobile ? 1 : 2;

  // Determine visible items
  const visibleProjects = expanded
    ? projectData
    : projectData.slice(0, VISIBLE_COUNT + FADED_COUNT);

  // Determine if ANY card will be faded in collapsed state
  const hasFadedCards = projectData.length > VISIBLE_COUNT;
  return (
    <>
      <Box sx={{ px: 3, pt: 10, pb: 3 }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            fontFamily: '"Lora", serif',
            mb: 6,
          }}
        >
          Where strategy and craft{" "}
          <Box
            component={"br"}
            sx={{ display: { xs: "none", md: "inherit" } }}
          />{" "}
          Elevate Every Build
        </Typography>

        <Box>
          <Grid container columnSpacing={3} rowSpacing={4}>
            {visibleProjects.map((project, index) => {
              const isFaded =
                !expanded &&
                index >= VISIBLE_COUNT &&
                index < VISIBLE_COUNT + FADED_COUNT;

              return (
                <Grid size={{ xs: 12, sm: 6 }} key={project.id}>
                  <Box sx={{ position: "relative" }}>
                    <ProjectCard data={project} index={index} />

                    {isFaded && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "50%",
                          pointerEvents: "none",
                          borderRadius: "inherit",

                          // Theme-aware gradient ✨
                          background: `linear-gradient(
                            to bottom,
                            ${alpha(theme.palette.background.paper, 0)} 0%,
                            ${alpha(theme.palette.background.paper, 1)} 100%
                          )`,
                        }}
                      />
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {hasFadedCards && (
            <Box textAlign="center" mt={3}>
              {expanded ? (
                <Button
                  aria-label="Show less Projects"
                  variant="outlined"
                  onClick={() => setExpanded(false)}
                >
                  Show Less
                </Button>
              ) : (
                <Button
                  aria-label="Show more projects"
                  variant="contained"
                  onClick={() => setExpanded(true)}
                >
                  Show More
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
