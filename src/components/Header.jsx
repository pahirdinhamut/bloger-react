import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar>
      <Container>
        <Logo>
          <Link to="/">
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
              alt=""
            />
          </Link>
        </Logo>
        <Menu>
          <Link to={"/?cat=art"}>ART</Link>
          <Link to={"/?cat=science"}>SCIENCE</Link>
          <Link to={"/?cat=tech"}>TECH</Link>
          <Link to={"/?cat=cinema"}>CINEMA</Link>
          <Link to={"/?cat=design"}>DESIGN</Link>
          <Link to={"/?cat=food"}>FOOD</Link>
          <Link to={"/?cat=it"}>IT</Link>
          <Link to={"/?cat=travel"}>TRAVEL</Link>
          <span>Pehirdin</span>
          <span>Logout</span>
          <Write to={"/write"}>
            <p>Write</p>
          </Write>
        </Menu>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.div`
  position: sticky;
  width: 1024px;
  background-color: white;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 10px;
  padding-left: 10px;
`;
const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
    color: #435045;
    font-weight: 600;
  }
  span {
    display: flex;
    flex: 1;
    color: #435045;
    font-weight: 300;
    border-bottom: 1px solid #435045;
  }
`;

const Write = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9ed5cb;
  padding: 10px;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  font-weight: 600;
  border: 1px solid #9ed5cb;
  cursor: pointer;
  p {
    color: white;
  }

  &:hover {
    p {
      color: #435045;
    }
    background-color: white;
    border: 1px solid #9ed5cb;
  }
`;

export default Header;
