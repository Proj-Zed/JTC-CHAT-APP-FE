import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import { Scrollbars } from "react-custom-scrollbars-2";
function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* Message */}
      <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        <Box width={"100%"} sx={{ flexGrow: 1, height: "100%" }}>
          <Message menu={true} />
        </Box>
      </Scrollbars>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
