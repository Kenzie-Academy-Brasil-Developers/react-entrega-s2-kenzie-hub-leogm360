import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Header,
  TopContainer,
  Logo,
  LogoImage,
  Rule,
  BottomContainer,
  TitleHeader,
  Text,
  Main,
  MainHeader,
  TitleMainHeader,
  Board,
  TitleEmptyBoard,
} from "./index";
import Button from "../../components/Button/index.jsx";
import Card from "../../components/Card/index.jsx";
import { ImPlus } from "react-icons/im";
import ModalRegister from "../../components/ModalRegister/index.jsx";
import ModalDetails from "../../components/ModalDetails/index.jsx";

const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  const history = useHistory();

  const params = useParams();

  const [user, setUser] = useState({});
  const [tech, setTech] = useState({});
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenziehub:token"))
  );
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalDetailsOpen, setIsModalDetailsOpen] = useState(false);

  const handleUser = (id) => {
    api
      .get(`/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error.response.data.message));
  };

  const handleLogout = () => {
    localStorage.clear();

    setIsAuthenticated(false);

    history.push("/");
  };

  useEffect(() => handleUser(params.id), [params.id]);

  return isAuthenticated ? (
    <>
      {isModalRegisterOpen && (
        <ModalRegister
          setIsModalRegisterOpen={setIsModalRegisterOpen}
          argumentsArray={[params.id]}
          callback={handleUser}
          token={token}
        />
      )}

      {isModalDetailsOpen && (
        <ModalDetails
          setIsModalDetailsOpen={setIsModalDetailsOpen}
          tech={tech}
          argumentsArray={[params.id]}
          callback={handleUser}
          token={token}
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <Header>
          <TopContainer>
            <Logo>
              <LogoImage
                src={require("../../assets/img/kenziehub-logo.png")}
                alt="Logotipo do Kenzie Hub"
              />
            </Logo>

            <Button
              colorSchema={"grey"}
              sizeSchema={"small"}
              onClick={() => handleLogout()}
              type="button"
            >
              Sair
            </Button>
          </TopContainer>

          <Rule />

          <BottomContainer>
            <TitleHeader>{`Olá, ${user.name}`}</TitleHeader>

            <Text>{`${user.course_module}`}</Text>
          </BottomContainer>

          <Rule />
        </Header>

        <Main>
          <MainHeader>
            <TitleMainHeader>Tecnologias</TitleMainHeader>

            <Button
              colorSchema={"grey"}
              sizeSchema={"small"}
              onClick={() => setIsModalRegisterOpen((state) => !state)}
              type="button"
            >
              <ImPlus />
            </Button>
          </MainHeader>

          <Board>
            {user.techs?.length === 0 ? (
              <TitleEmptyBoard>
                Seu quadro está vazio! Adicione algumas tecnologias.
              </TitleEmptyBoard>
            ) : (
              user.techs?.map((tech) => {
                return (
                  <Card
                    key={tech.id}
                    title={tech.title}
                    status={tech.status}
                    onClick={() => {
                      setTech(tech);
                      setIsModalDetailsOpen((state) => !state);
                    }}
                  />
                );
              })
            )}
          </Board>
        </Main>
      </motion.div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Dashboard;
