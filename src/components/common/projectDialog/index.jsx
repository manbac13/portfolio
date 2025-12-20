import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight, CircleX } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { projectData } from "utils/data";

const ProDialog = ({ open, onClose, id }) => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState(id);

  const projectSelected = projectData[selectedId];

  const handleNext = () => {
    if (projectData.length - 1 === selectedId) {
      return;
    }
    setSelectedId((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (selectedId === 0) {
      return;
    }
    setSelectedId((prev) => prev - 1);
  };

  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 5, // 3 = 24px (theme spacing scale)
            overflow: "hidden", // ensures rounded corners clip children
            backgroundImage: "none", // optional: removes default MUI gradient
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CircleX />
        </IconButton>
        <DialogContent>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={3}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                visibility: selectedId === 0 ? "hidden" : "inherit",
                display: isSmall ? "none" : "inherit",
              }}
            >
              <CircleArrowLeft />
            </IconButton>
            <Box>
              <Box>
                <Typography textAlign={"center"} color="textDisabled">
                  {`${selectedId + 1}/${projectData.length}`}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "90%" },
                  margin: "auto",
                  overflow: "hidden", // prevents the scale from overflowing
                  borderRadius: "10px",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Box
                      component={"img"}
                      src={projectSelected.image}
                      sx={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Box>

            <IconButton
              onClick={handleNext}
              sx={{
                visibility:
                  selectedId === projectData?.length - 1 ? "hidden" : "inherit",
                display: isSmall ? "none" : "inherit",
              }}
            >
              <CircleArrowRight />
            </IconButton>
          </Box>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Box sx={{ px: { xs: 0, sm: 0, md: 10 }, mb: 3 }}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box>
                    <Typography variant="h4">
                      {projectSelected.project_name}
                    </Typography>
                    <Typography color="textSecondary">
                      {projectSelected.subtitle}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    compocomponent="a"
                    href={projectSelected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProDialog;

ProDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  id: PropTypes.number,
};
