import { Box, keyframes } from "@mui/material";
import PropTypes from "prop-types";

const Blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.2; }
  100% { opacity: 1; }
`;

const BlinkingDot = ({ size = 6, status = "online", animation = true }) => {
  const color = status === "online" ? "green" : "red";

  return (
    <Box
      sx={{
        display: "inline-block",
        borderRadius: "50%",
        verticalAlign: "middle",
        backgroundColor: color,
        width: size,
        height: size,
        animation: animation ? `${Blink} 1.5s infinite ease-in-out` : "none",
      }}
    />
  );
};

BlinkingDot.propTypes = {
  size: PropTypes.number,
  status: PropTypes.oneOf(["online", "offline"]),
  animation: PropTypes.bool,
};

export default BlinkingDot;
