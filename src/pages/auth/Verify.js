import { Stack, Typography } from "@mui/material";
import React from "react";
import VerifyForm from "../../sections/auth/VerifyForm";

const Verify = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Please Enter The Secret Code</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">
            Call 113/MIS Support To Input The Secret Code
          </Typography>
        </Stack>
      </Stack>
      {/* Verify Form */}
      <VerifyForm />
    </>
  );
};

export default Verify;
