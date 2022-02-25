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
} from "./index";
import Button from "../../components/Button/index.jsx";
import Card from "../../components/Card/index.jsx";
import { ImPlus } from "react-icons/im";
import ModalRegister from "../../components/ModalRegister/index.jsx";
import ModalDetails from "../../components/ModalDetails/index.jsx";

const Dashboard = () => {
  return (
    <>
      <ModalDetails />
      <Header>
        <TopContainer>
          <Logo>
            <LogoImage
              src={require("../../assets/img/kenziehub-logo.png")}
              alt="Logotipo do Kenzie Hub"
            />
          </Logo>

          <Button colorSchema={"grey"} sizeSchema={"small"}>
            Sair
          </Button>
        </TopContainer>

        <Rule />

        <BottomContainer>
          <TitleHeader>Olá, Leonardo Moraes</TitleHeader>

          <Text>Terceiro módulo (Introdução ao React)</Text>
        </BottomContainer>

        <Rule />
      </Header>

      <Main>
        <MainHeader>
          <TitleMainHeader>Tecnologias</TitleMainHeader>

          <Button colorSchema={"grey"} sizeSchema={"small"} type="button">
            <ImPlus />
          </Button>
        </MainHeader>

        <Board>
          <Card tech={"Javascript"} level={"Avançado"} />

          <Card tech={"Javascript"} level={"Avançado"} />

          <Card tech={"Javascript"} level={"Avançado"} />

          <Card tech={"Javascript"} level={"Avançado"} />

          <Card tech={"Javascript"} level={"Avançado"} />

          <Card tech={"Javascript"} level={"Avançado"} />
        </Board>
      </Main>
    </>
  );
};

export default Dashboard;
