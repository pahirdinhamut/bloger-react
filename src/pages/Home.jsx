import React from "react";
import styled from "styled-components";
import PostView from "../components/PostView";

const post = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tenetur optio saepe! Non ab quod perferendis nesciunt? Earum inventore quod non eum enim explicabo reprehenderit, maxime quisquam praesentium dignissimos aperiam adipisci nemo! Cum aut sit fugit asperiores excepturi quia veniam aliquid ullam quos optio amet modi laborum nihil reiciendis tempora magnam mollitia dicta, sapiente earum itaque numquam minus quam! Ea possimus, blanditiis explicabo magni nisi rerum assumenda laudantium sequi reprehenderit fugiat aliquam neque ipsa, nemo vero deleniti, illum quam velit dicta sunt et dignissimos! Molestiae, veniam sunt, eum quisquam quidem incidunt, totam consequuntur fugit ipsa quia magnam illo porro quos!",
    img: "https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tenetur optio saepe! Non ab quod perferendis nesciunt? Earum inventore quod non eum enim explicabo reprehenderit, maxime quisquam praesentium dignissimos aperiam adipisci nemo! Cum aut sit fugit asperiores excepturi quia veniam aliquid ullam quos optio amet modi laborum nihil reiciendis tempora magnam mollitia dicta, sapiente earum itaque numquam minus quam! Ea possimus, blanditiis explicabo magni nisi rerum assumenda laudantium sequi reprehenderit fugiat aliquam neque ipsa, nemo vero deleniti, illum quam velit dicta sunt et dignissimos! Molestiae, veniam sunt, eum quisquam quidem incidunt, totam consequuntur fugit ipsa quia magnam illo porro quos!",
    img: "https://images.unsplash.com/photo-1664910059414-f7d75a61f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tenetur optio saepe! Non ab quod perferendis nesciunt? Earum inventore quod non eum enim explicabo reprehenderit, maxime quisquam praesentium dignissimos aperiam adipisci nemo! Cum aut sit fugit asperiores excepturi quia veniam aliquid ullam quos optio amet modi laborum nihil reiciendis tempora magnam mollitia dicta, sapiente earum itaque numquam minus quam! Ea possimus, blanditiis explicabo magni nisi rerum assumenda laudantium sequi reprehenderit fugiat aliquam neque ipsa, nemo vero deleniti, illum quam velit dicta sunt et dignissimos! Molestiae, veniam sunt, eum quisquam quidem incidunt, totam consequuntur fugit ipsa quia magnam illo porro quos!",
    img: "https://images.unsplash.com/photo-1664969417440-c73804d60277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://images.unsplash.com/photo-1664919418894-b787c5305bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

function Home() {
  return (
    <Container>
      <Posts>
        {post.map((post) => (
          <PostView
            key={post.id}
            title={post.title}
            content={post.content}
            img={post.img}
          />
        ))}
      </Posts>
    </Container>
  );
}

const Container = styled.div``;
const Posts = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export default Home;
