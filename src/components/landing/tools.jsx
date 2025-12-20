import { Box, Grid, Stack, Typography } from "@mui/material";
import { toolData } from "utils/data";

const Tools = () => {
  const categories = Object.entries(toolData);
  return (
    <>
      <Box sx={{ px: 3, mt: 10, mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            fontFamily: '"Lora", serif',
            mb: 2,
          }}
        >
          How I Build - Tech & Tools?
        </Typography>

        <Typography
          color="textSecondary"
          sx={{ maxWidth: { xs: "90%", md: "70%" }, fontSize: "1rem", mb: 5 }}
        >
          These are the tools that take me from inspiration to execution. A
          curated set of tools that carries me from first sketch to final deploy
          with clarity and craft.
        </Typography>

        <Box>
          <Grid container spacing={5}>
            {categories.map(([category, items]) => (
              <Grid size={{ xs: 6, sm: 6 }} key={category}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      pb: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {category === "ai" ? "AI & Assistive Tools" : category}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {items.map((item) => (
                    <Stack
                      direction={"row"}
                      key={item.id}
                      spacing={1}
                      alignItems={"center"}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        className="icon-box"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          p: 0.75,
                          border: (theme) =>
                            theme.palette.mode === "light"
                              ? `1px solid ${theme.palette.grey[100]}`
                              : `1px solid ${theme.palette.grey[900]}`,
                          borderRadius: 3,
                          background: item.background,
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.tool_name}
                          width={"24px"}
                          height={"24px"}
                        />
                      </Box>

                      <Typography
                        component={"a"}
                        color="textDisabled"
                        href={item.path}
                        target="_blank"
                        sx={{
                          fontSize: "15px",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: (theme) =>
                              theme.palette.mode === "light"
                                ? theme.palette.common.black
                                : theme.palette.common.white,
                          },
                        }}
                      >
                        {item.tool_name}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Tools;
