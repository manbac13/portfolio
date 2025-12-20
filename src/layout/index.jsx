import { Box } from "@mui/material";
import { COMMON_WIDTH } from "config";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: "95%", sm: "80%", lg: COMMON_WIDTH },
          margin: "auto",
          borderRight: (theme) =>
            theme.palette.mode === "light"
              ? `2px solid ${theme.palette.grey[100]}`
              : `1px solid ${theme.palette.grey[900]}`,
          borderLeft: (theme) =>
            theme.palette.mode === "light"
              ? `2px solid ${theme.palette.grey[100]}`
              : `1px solid ${theme.palette.grey[900]}`,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
