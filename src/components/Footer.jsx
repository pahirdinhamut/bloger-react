import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <span>
        <p>© 2022 Pehirdin. All rights reserved.</p>
        <p>
          Made with 💙 and <b>React.js</b>{" "}
        </p>
      </span>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-top: 40px;
  background-color: #9ed5cb;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p {
      font-size: 16px;
      color: #435045;
      text-align: center;
    }
  }
`;

export default Footer;
