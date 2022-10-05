import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function index({ title, content, img }) {
  return (
    <>
      <Post>
        <Photo>
          <img src={img} alt="" />
        </Photo>
        <Content>
          <h1>{title}</h1>
          <p>{content}</p>
          <Link to="/post/1">
            <Button>Read More</Button>
          </Link>
        </Content>
      </Post>
    </>
  );
}

const Post = styled.div`
  display: flex;
  gap: 100px;

  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
`;

const Photo = styled.div`
  flex: 2;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #a6d5cc4d;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border: 1px solid #425045;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  &:hover {
    background-color: #425045;
    color: white;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9ed5cb;
  margin-top: 150px;
`;
export default index;
