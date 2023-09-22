import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout/RootLayout";
import { Global } from "@emotion/react";
import { Common } from "./styles/Global/common";
import Signup from "./pages/Signup/Signup";

function App(props) {
  return (
    <>
      <Global styles={Common} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<></>} />
            <Route path="/accounts/emailsignup" element={<Signup />} />
            <Route path="/:username" element={<>test1</>} />
            <Route path="/explore" element={<>explorer</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
