import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import { ChatList } from "../../data";
//import { SimpleBarStyle } from "../../components/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
import { socket } from "../../socket";
import { useSelector } from "react-redux";

const user_id = window.localStorage.getItem("user_id");

const Chats = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );

  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      //data => list of conversations
    });
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25",
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Chats</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" alignItems={"center"} spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack
            spacing={2}
            direction="column"
            className="scrollbar"
            sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
          >
            {/* <Scrollbars
            autoHide
            autoHideTimeout={500}
            autoHideDuration={200}
            style={{ width: "100%", height: "100%" }}
          > */}
            <Stack spacing={2.4}>
              {/* <Typography
                variant="subtitle2"
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })} */}
            </Stack>
            <Stack paddingTop={2} spacing={2.4}>
              <Typography
                variant="subtitle2"
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                All Chats
              </Typography>
              {conversations
                .filter((el) => !el.pinned)
                .map((el) => {
                  return <ChatElement {...el} />;
                })}
            </Stack>
            {/* </Scrollbars> */}
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
