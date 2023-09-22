import React from "react";
import SigninupLayout from "../../components/Layouts/Signin_up/SigninupLayout";
import Top from "../../components/Layouts/Signin_up/Top/Top";
import Bottom from "../../components/Layouts/Signin_up/Bottom.jsx/Bottom";
import Input from "../../components/Layouts/Signin_up/Input/Input";

function Signup(props) {
  return (
    <SigninupLayout>
      <Top>
        <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
        <button>Kakao로 로그인</button>
        <div>또는</div>
        <div>
          <Input />
        </div>
      </Top>
      <Bottom></Bottom>
    </SigninupLayout>
  );
}

export default Signup;
