import { Box, Stack, Avatar, Typography, Button, alpha } from "@mui/material";

// Devloper Logo
import Logo from "../../../assets/Images/cj.jpg";

export default function Developer() {
  const openLinkInNewTab = () => {
    window.open("https://github.com/Proj-Zed", "_blank");
  };

  return (
    <Box
      width={"100%"}
      component={Button}
      onClick={openLinkInNewTab}
      sx={{
        "&:hover": {
          backgroundColor: (theme) => theme.palette.background.default,
        },
      }}
    >
      <Stack direction={"column"} alignItems={"center"} spacing={2}>
        <Avatar
          src={Logo}
          alt={"Cedrick James Ribad"}
          sx={{
            width: 90,
            height: 90,
            border: (theme) =>
              `1px dashed ${alpha(theme.palette.grey[500], 1)}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <Stack direction={"column"} spacing={1}>
          <Typography
            variant="caption"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            Cedrick James L. Ribad
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            Developer
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
