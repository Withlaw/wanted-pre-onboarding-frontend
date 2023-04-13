import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Main, Notice, Page, Title, Wrapper } from "../components/Form";
import { postSignin } from "../api";
import {
  checkEmailValidation,
  checkPasswordValidation,
  isLogin,
} from "../helpers";
import { ROUTE_PATH } from "../constants";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValidCheck] = useState(true);

  const navigation = useNavigate();

  const onChangeHandlerEmail = e => {
    setEmail(e.currentTarget.value);
    setEmailValid(checkEmailValidation(e.currentTarget.value));
  };
  const onChangeHandlerPassword = e => {
    setPassword(e.currentTarget.value);
    setPasswordValidCheck(checkPasswordValidation(e.currentTarget.value));
  };

  const onSubmitHandlerEmailPassword = async e => {
    e.preventDefault();
    try {
      await postSignin({ email, password });
      navigation(ROUTE_PATH.TODO);
    } catch (error) {
      alert("이메일 및 패스워드를 다시 한 번 확인해주세요");
      console.error("로그인에러", error.message);
    }
  };

  // // login check
  useEffect(() => {
    isLogin() && navigation(ROUTE_PATH.TODO);
  }, []);

  return (
    <Page>
      <Title>로 그 인</Title>
      <Main>
        <form onSubmit={onSubmitHandlerEmailPassword}>
          <Wrapper>
            <label>Email</label>
            <input
              type={"email"}
              value={email}
              onChange={onChangeHandlerEmail}
              data-testid="email-input"
            ></input>
            {emailValid || <span>*이메일 형식에 맞지 않습니다</span>}
          </Wrapper>

          <Wrapper>
            <label>Password</label>
            <input
              type={"password"}
              value={password}
              onChange={onChangeHandlerPassword}
              data-testid="password-input"
            ></input>
            {passwordValid || <span>*비밀번호 형식에 맞지 않습니다</span>}
          </Wrapper>

          <Button
            data-testid="signin-button"
            disabled={!(email && password && emailValid && passwordValid)}
          >
            로그인
          </Button>
        </form>

        <Notice>
          <span>아이디가 없으신가요? &rarr; </span>
          <Link to={"/signup"}>회원가입하기</Link>
        </Notice>
      </Main>
    </Page>
  );
};

export default Signin;
