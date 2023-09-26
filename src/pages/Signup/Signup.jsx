import React, { useEffect, useState } from "react";
import SigninupLayout from "../../components/Layouts/Signin_up/SigninupLayout";
import Top from "../../components/Layouts/Signin_up/Top/Top";
import Bottom from "../../components/Layouts/Signin_up/Bottom.jsx/Bottom";
import Input from "../../components/Layouts/Signin_up/Input/Input";
import OrBar from "../../components/Layouts/Signin_up/OrBar/OrBar";
import { signup } from "../../api/account";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const emptyAccount = {
    phoneOrEmail: "",
    name: "",
    username: "",
    password: "",
  };
  const [account, setAccount] = useState(emptyAccount);
  const [isComplete, setIsComplete] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onAccountChange = (name, value) => {
    setAccount({ ...account, [name]: value });
  };

  const onSignUpClick = async () => {
    try {
      const response = await signup(account);
      setErrorMessage("");
      navigate("/accounts/login");
    } catch (error) {
      console.log("오류");
      const responseErrMsg = error.response.data;
      const keyList = Object.keys(responseErrMsg);
      if (keyList.includes("username")) {
        setErrorMessage(responseErrMsg.username);
      } else if (keyList.includes("phoneOrEmail")) {
        setErrorMessage(responseErrMsg.phoneOrEmail);
      } else if (keyList.includes("name")) {
        setErrorMessage(responseErrMsg.name);
      } else if (keyList.includes("password")) {
        setErrorMessage(responseErrMsg.password);
      }
    }
  };

  useEffect(() => {
    setIsComplete(Object.values(account).includes(""));
    console.log(isComplete);
  }, [account]);

  return (
    <SigninupLayout>
      <Top>
        <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
        <button>Kakao로 로그인</button>
        <OrBar />
        <div>
          <Input
            changeAccount={onAccountChange}
            name="phoneOrEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <Input
            changeAccount={onAccountChange}
            name="name"
            placeholder="성명"
          />
          <Input
            changeAccount={onAccountChange}
            name="username"
            placeholder="사용자이름"
          />
          <Input
            changeAccount={onAccountChange}
            type="password"
            name="password"
            placeholder="비밀번호"
          />
        </div>
        <button onClick={onSignUpClick} disabled={isComplete}>
          가입
        </button>
        <div>{errorMessage}</div>
      </Top>
      <Bottom></Bottom>
    </SigninupLayout>
  );
}

export default Signup;
