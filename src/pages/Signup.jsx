import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Main, Notice, Page, Title, Wrapper } from "../components/Form";
import { postSignup } from "../api";
import {
  checkEmailValidation,
  checkPasswordValidation,
  isLogin,
} from "../helpers";
import { ROUTE_PATH } from "../constants";
import { useInput } from "../hooks";

const Signup = () => {
  const {
    value: { email, password },
    onChange: inputChange,
  } = useInput({ email: "", password: "" });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValidCheck] = useState(true);

  const navigation = useNavigate();

  const onChangeHandlerEmail = e => {
    inputChange(e.currentTarget);
    setEmailValid(checkEmailValidation(e.currentTarget.value));
  };

  const onChangeHandlerPassword = e => {
    inputChange(e.currentTarget);
    setPasswordValidCheck(checkPasswordValidation(e.currentTarget.value));
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      await postSignup({ email, password });
      navigation(ROUTE_PATH.SIGNIN);
    } catch (error) {
      // 400 아이디 중복?
      console.error("회원가입에러", error.message);
    }
  };

  // // login check
  useEffect(() => {
    isLogin() && navigation(ROUTE_PATH.TODO);
  }, []);

  return (
    <Page>
      <Title>회 원 가 입</Title>
      <Main>
        <form onSubmit={onSubmitHandler}>
          <Wrapper>
            <label>Email</label>
            <input
              type={"email"}
              name="email"
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
              name="password"
              value={password}
              onChange={onChangeHandlerPassword}
              data-testid="password-input"
            ></input>
            {passwordValid || <span>*비밀번호 형식에 맞지 않습니다</span>}
          </Wrapper>

          <Button
            data-testid="signup-button"
            disabled={!(email && password && emailValid && passwordValid)}
          >
            회원가입
          </Button>
        </form>

        <Notice>
          <span>아이디가 있으신가요? &rarr; </span>
          <Link to={"/signin"}>로그인하기</Link>
        </Notice>
      </Main>
    </Page>
  );
};

export default Signup;
