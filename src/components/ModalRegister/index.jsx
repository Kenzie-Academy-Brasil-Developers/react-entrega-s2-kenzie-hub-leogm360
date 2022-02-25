import {
  Container,
  RegisterContainer,
  Header,
  Title,
  Form,
  Footer,
} from "./index";
import Button from "../Button/index.jsx";
import Input from "../Inputs/index.jsx";
import Select from "../Select/index.jsx";
import { ImCross } from "react-icons/im";

const ModalRegister = () => {
  return (
    <Container>
      <RegisterContainer>
        <Header>
          <Title>Cadastrar Tecnologia</Title>

          <Button sizeSchema={"square"}>
            <ImCross />
          </Button>
        </Header>

        <Form>
          <Input label={"Nome"} placeholder="Tecnologia*" />

          <Select label={"Selecionar status"}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </Select>
        </Form>

        <Footer>
          <Button>Cadastrar Tecnologia</Button>
        </Footer>
      </RegisterContainer>
    </Container>
  );
};

export default ModalRegister;
