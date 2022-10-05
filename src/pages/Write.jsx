import React from "react";
import styled from "styled-components";
import ReactQuiil from "react-quill";
import "react-quill/dist/quill.snow.css";
function Write() {
  const [value, setValue] = React.useState("");
  console.log(value);
  return (
    <Container>
      <Content className="content">
        <input type="text" placeholder="Title" />
        <EditorContainer>
          <Editor
            theme="snow"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </EditorContainer>
      </Content>
      <Menu>
        <Item>
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visiblity:</b> public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name=" " />
          <File htmlFor="file">Upload Image</File>
          <Buttons className="buttons">
            <Button>Save</Button>
            <Button>Update</Button>
          </Buttons>
        </Item>
        <Item className="item">
          <h1>Categories</h1>
          <div>
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div>
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div>
            <input type="radio" name="cat" value="tech" id="tech" />
            <label htmlFor="tech">Tech</label>
          </div>
          <div>
            <input type="radio" name="cat" value="sport" id="sport" />
            <label htmlFor="sport">Sport</label>
          </div>
          <div>
            <input type="radio" name="cat" value="music" id="music" />
            <label htmlFor="music">Music</label>
          </div>
          <div>
            <input type="radio" name="cat" value="travel" id="travel" />
            <label htmlFor="travel">Travel</label>
          </div>
        </Item>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 10px;
    border: 1px solid #9ed5cb;
    border-radius: 5px;
    outline: none;
  }
`;

const Menu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Item = styled.div`
  border: 1px solid #9ed5cb;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-style: 12px;
  padding: 10px;
  gap: 5px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  label {
    margin: 10px 0;
  }
  input {
    margin-right: 5px;
  }
`;

const EditorContainer = styled.div`
  height: 430px;
  border: 1px solid #9ed5cb;
  border-radius: 5px;
  overflow: hidden;
`;

const Editor = styled(ReactQuiil)`
  height: 100%;
`;

const File = styled.label`
  padding: 10px;
  border: 1px solid #9ed5cb;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #9ed5cb;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #9ed5cb;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #9ed5cb;
  }
`;

export default Write;
