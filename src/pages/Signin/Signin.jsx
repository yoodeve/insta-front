import React, { useEffect, useState } from "react";
import SigninupLayout from "../../components/Layouts/Signin_up/SigninupLayout";
import Top from "../../components/Layouts/Signin_up/Top/Top";
import Input from "../../components/Layouts/Signin_up/Input/Input";
import OrBar from "../../components/Layouts/Signin_up/OrBar/OrBar";
import { signin } from "../../api/account";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { rc_authRouteState } from "../../store/atoms/authRouteState";

function Signin(props) {
  const emptyAccount = {
    phoneOrEmailOrUsername: "",
    loginPassword: "",
  };

  const [account, setAccount] = useState(emptyAccount);
  const [isComplete, setIsComplete] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [authRouteState, setAuthRouteState] = useRecoilState(rc_authRouteState);

  const onAccountChange = (name, value) => {
    setAccount({ ...account, [name]: value });
  };

  const loginOnClick = async () => {
    try {
      const response = await signin(account);
      localStorage.setItem("accessToken", `Bearer ${response.data}`);
      setAuthRouteState(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsComplete(Object.values(account).includes(""));
  }, [account]);

  return (
    <SigninupLayout>
      <div>
        <Top>
          <Input
            placeholder="전화번호, 사용자이름 또는 이메일"
            changeAccount={onAccountChange}
            name="phoneOrEmailOrUsername"
          />
          <Input
            placeholder="비밀번호"
            changeAccount={onAccountChange}
            name="loginPassword"
            type="password"
          />
          <button onClick={loginOnClick} disabled={isComplete}>
            로그인
          </button>
          <OrBar />
          <div style={{ textAlign: "center" }}>kakao로 로그인</div>
        </Top>
      </div>
    </SigninupLayout>
  );
}

export default Signin;
