import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Auth>
      <h1>Login</h1>
      <form>
        <Alert>
          <p>This is a error!</p>
        </Alert>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Buttom type="submit">Login</Buttom>
        <Span>
          Don't have accound? <Link to="/register">Register</Link>
        </Span>
      </form>
    </Auth>
  );
}

const Auth = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  h1 {
    font-size: 20px;
    color: #35ab55;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: white;
    width: 200px;
    gap: 20px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 15px;
  outline: none;
  &:focus {
    border-bottom: 1px solid #35ab55;
  }
`;

const Buttom = styled.button`
  padding: 15px;
  border: none;
  background-color: #35ab55;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;

const Span = styled.span`
  color: grey;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  a {
    color: #35ab55;
    font-weight: 600;
    text-decoration: none;
  }
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8d7da;
  padding: 10px;
  border-radius: 5px;
  height: 30px;
  p {
    font-size: 16px;
    color: #842028;
  }
`;

export default Login;
