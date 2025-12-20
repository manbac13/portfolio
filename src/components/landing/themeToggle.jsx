import { Stack, ToggleButton } from "@mui/material";
import { ColorModeContext } from "contexts/themeContext";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useContext } from "react";

const ThemeToggle = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        spacing={1}
        py={3}
        px={2}
      >
        <ToggleButton
          sx={{ ...buttonStyles }}
          selected={mode === "light"}
          onClick={() => toggleColorMode("light")}
        >
          <Sun size={16} />
        </ToggleButton>

        <ToggleButton
          sx={{ ...buttonStyles }}
          selected={mode === "dark"}
          onClick={() => toggleColorMode("dark")}
        >
          <Moon size={16} />
        </ToggleButton>

        <ToggleButton sx={{ ...buttonStyles }}>
          <LaptopMinimal size={16} />
        </ToggleButton>
      </Stack>
    </>
  );
};

export default ThemeToggle;

const buttonStyles = {
  p: 0.75,
  borderRadius: "50%",
  border: 'none'
};
