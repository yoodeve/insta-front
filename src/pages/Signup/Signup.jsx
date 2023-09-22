import React, { useEffect, useState } from "react";
import SigninupLayout from "../../components/Layouts/Signin_up/SigninupLayout";
import Top from "../../components/Layouts/Signin_up/Top/Top";
import Bottom from "../../components/Layouts/Signin_up/Bottom.jsx/Bottom";
import Input from "../../components/Layouts/Signin_up/Input/Input";
import OrBar from "../../components/Layouts/Signin_up/OrBar/OrBar";

function Signup(props) {
  const emptyAccount = {
    phoneAndEmail: "",
    name: "",
    username: "",
    password: "",
  };
  const [account, setAccount] = useState(emptyAccount);
  const [isComplete, setIsComplete] = useState(true)

  const onAccountChange = (name, value) => {
    setAccount({ ...account, [name]: value });
  };

  useEffect(() => {
    setIsComplete(Object.values(account).includes(""))
    console.log(isComplete)
  }, [account]);

  useEffect(() => {
    console.log(isComplete)
  })

  return (
    <SigninupLayout>
      <Top>
        <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
        <button>Kakao로 로그인</button>
        <OrBar />
        <div>
          <Input
            changeAccount={onAccountChange}
            name="phoneAndEmail"
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
        <button disabled={isComplete}>가입</button>
      </Top>
      <Bottom></Bottom>
    </SigninupLayout>
  );
}

export default Signup;
