import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Home, Register, Single, Write, Login } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.scss";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <Write /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/post/:postId",
    element: <Single />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

function App() {
  return (
    <AppContainer>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1024px;
`;

export default App;
