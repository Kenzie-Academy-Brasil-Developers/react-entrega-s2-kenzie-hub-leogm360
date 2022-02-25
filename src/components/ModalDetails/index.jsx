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

const ModalDetails = () => {
  return (
    <Container>
      <RegisterContainer>
        <Header>
          <Title>Tecnologia Detalhes</Title>

          <Button sizeSchema={"square"}>
            <ImCross />
          </Button>
        </Header>

        <Form>
          <Input label={"Nome do projeto"} placeholder="Projeto*" />

          <Select label={"Status"}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </Select>
        </Form>

        <Footer>
          <Button colorSchema={"negative"}>Salvar alterações</Button>

          <Button colorSchema={"disabled"}>Excluir</Button>
        </Footer>
      </RegisterContainer>
    </Container>
  );
};

export default ModalDetails;
