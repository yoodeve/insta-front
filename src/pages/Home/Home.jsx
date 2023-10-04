import React, { useEffect } from "react";
import { getUser } from "../../api/user";
import jwt_decode from "jwt-decode";

function Home(props) {
  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("accessToken").substring(7);
      const claims = jwt_decode(token).username;
      const response = await getUser(claims);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return <div></div>;
}

export default Home;
