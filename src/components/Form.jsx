import styled from "styled-components";

export const Page = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 14px;
`;

export const Main = styled.div`
  border: 1px solid;
  /* background-color: gray; */
  border-radius: 5px;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  input {
    width: 200px;
  }
  span {
    font-size: 0.7rem;
    color: red;
    margin: 5px 0;
  }
`;

export const Button = styled.button`
  width: 100%;
`;

export const Notice = styled.div`
  font-size: 0.8em;

  margin-top: 10px;

  display: flex;
  /* justify-content: space-around; */
  justify-content: space-between;

  a {
    color: #0074cc;
  }
`;
