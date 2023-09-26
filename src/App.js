import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout/RootLayout";
import { Global } from "@emotion/react";
import { Common } from "./styles/Global/common";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import AuthRoute from "./auth/AuthRoute";

function App(props) {
  return (
    <>
      <Global styles={Common} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<>Home</>} />
            <Route
              path="/accounts/emailsignup"
              element={<AuthRoute element={<Signup />} />}
            />
            <Route
              path="/accounts/login"
              element={<AuthRoute element={<Signin />} />}
            />
            <Route
              path="/:username"
              element={<AuthRoute element={<>test2</>} />}
            />
            <Route
              path="/explore"
              element={<AuthRoute element={<>test3</>} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
