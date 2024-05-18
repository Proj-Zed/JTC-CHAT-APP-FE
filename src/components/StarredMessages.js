import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import React from "react";
import { CaretLeft } from "phosphor-react";
import { UpdateSidebartype } from "../redux/slices/app";
import { Scrollbars } from "react-custom-scrollbars-2";
import Message from "./Conversation/Message";
const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      {/* Header */}
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            spacing={3}
            alignItems={"center"}
            sx={{ height: "100", p: 2 }}
            direction={"row"}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebartype("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>
        {/* Body */}
        <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexGrow: 1,
              //overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
            <Message />
          </Stack>
        </Scrollbars>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
