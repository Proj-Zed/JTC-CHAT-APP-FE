import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { CaretLeft } from "phosphor-react";
import { UpdateSidebartype } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCUMENT, SHARED_LINK } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import { Scrollbars } from "react-custom-scrollbars-2";
const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
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
            spacing={value === 1 ? 1 : 3}
          >
            {(() => {
              switch (value) {
                case 0:
                  //Media
                  return (
                    <Grid container spacing={2}>
                      {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                        return (
                          <Grid item xs={4}>
                            <img
                              src={faker.image.avatar()}
                              alt={faker.name.fullName()}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  );
                case 1:
                  //Links
                  return SHARED_LINK.map((el) => <LinkMsg el={el} />);
                case 2:
                  //Docs
                  return SHARED_DOCUMENT.map((el) => <DocMsg el={el} />);
                default:
                  break;
              }
            })()}
          </Stack>
        </Scrollbars>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
