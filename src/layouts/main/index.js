import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/Jtc.png";
import { useSelector } from "react-redux";
// const isAuthenticated = true;
const MainLayout = () => {

  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to="/app" />;
  }
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
          >
            <img
              style={{ height: 150, width: 240, marginBottom: 50 }}
              src={Logo}
              alt="Logo"
            />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
