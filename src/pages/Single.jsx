import React from "react";
import styled from "styled-components";
import { RiEditBoxLine, RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import MenuView from "../components/MenuView";

function Single() {
  return (
    <Container>
      <Content className="content">
        <img
          src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />

        <User>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJLmfp8j7gOU47mIcGPhVL-rvAluDQFkp_g&usqp=CAU" />
          <Info className="info">
            <span>Pehirdin</span>
            <span>Posted 1 hour ago</span>
          </Info>
          <Edit className="edit">
            <Link to={`/write?edit=2`}>
              <RiEditBoxLine color="#9ed5cb" size={20} />
            </Link>
            <Link>
              <RiDeleteBin2Line color="red" size={20} />
            </Link>
          </Edit>
        </User>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          soluta.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          accusamus voluptatem odit veniam in odio incidunt corporis cumque
          alias! Suscipit culpa hic non ipsum veritatis rerum animi eaque minima
          repellat ipsa at praesentium tempore distinctio, commodi maiores
          magnam nesciunt. Consequatur rerum adipisci veniam amet voluptate
          nulla deserunt expedita voluptatum eligendi perferendis error quam,
          iste voluptatibus nobis, voluptatem, dolores fuga esse quos! Mollitia
          expedita quibusdam in error sint dignissimos rerum qui accusantium
          necessitatibus, provident voluptas! Quae soluta unde id magnam
          recusandae harum sit dolores rem, vero nulla voluptates, animi aut
          sunt provident reiciendis ipsa corporis! Iusto necessitatibus quisquam
          reprehenderit laborum optio, similique incidunt rerum eos et non quia
          nostrum cum qui voluptates laudantium dolor corrupti eveniet minima
          nisi atque id! Aliquid, tempore. Fugit dicta ullam quidem magnam
          dolore, error unde, quas quod a cumque saepe doloribus inventore.
          Distinctio eum quos ullam aperiam? Nihil quibusdam, vel delectus,
          voluptatum placeat repudiandae voluptate dolore et quod explicabo
          tempore tenetur assumenda sequi nesciunt eaque asperiores, soluta nisi
          ipsum modi magni. Placeat laboriosam atque nemo sequi perferendis
          molestiae, veniam laudantium quo odit, ex voluptatibus quaerat
          corporis quisquam ab perspiciatis sunt harum voluptatum. Qui
          laboriosam alias obcaecati. nisi atque id! Aliquid, tempore. Fugit
          dicta ullam quidem magnam dolore, error unde, quas quod a cumque saepe
          doloribus inventore. Distinctio eum quos ullam aperiam? Nihil
          quibusdam, vel delectus, voluptatum placeat repudiandae voluptate
          dolore et quod explicabo tempore tenetur assumenda sequi nesciunt
          eaque asperiores, soluta nisi ipsum modi magni. Placeat laboriosam
          atque nemo sequi perferendis molestiae, veniam laudantium quo odit, ex
          voluptatibus quaerat corporis quisquam ab perspiciatis sunt harum
          voluptatum. Qui laboriosam alias obcaecati.
        </p>
      </Content>
      <Menu className="menu">
        <MenuView />
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    font-size: 20px;
    line-height: 1.5;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 14px;
    color: black;
  }

  span {
    font-size: 14px;
    color: gray;
  }
`;

const Menu = styled.div`
  flex: 2;
`;

const Edit = styled.div`
  display: flex;
  gap: 5px;
`;

export default Single;
