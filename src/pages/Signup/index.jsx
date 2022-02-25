import {
  Header,
  Logo,
  LogoImage,
  Main,
  SignupContainer,
  FormHeader,
  Title,
  Text,
  Form,
  FormFooter,
} from "./index";
import Button from "../../components/Button/index.jsx";
import Input from "../../components/Inputs/index.jsx";
import Select from "../../components/Select/index.jsx";

const Signup = () => {
  return (
    <>
      <Header>
        <Logo>
          <LogoImage
            src={require("../../assets/img/kenziehub-logo.png")}
            alt="Logotipo do Kenzie Hub"
          />
        </Logo>

        <Button colorSchema={"grey"} sizeSchema={"small"}>
          Voltar
        </Button>
      </Header>

      <Main>
        <SignupContainer>
          <FormHeader>
            <Title>Crie sua conta</Title>

            <Text>Rápido e grátis, vamos nessa</Text>
          </FormHeader>

          <Form>
            <Input
              label={"Nome"}
              placeholder="Digite aqui seu nome"
              type="text"
            />

            <Input
              label={"Email"}
              placeholder="Digite aqui seu email"
              type="email"
            />

            <Input
              label={"Senha"}
              placeholder="Digite aqui sua senha"
              type="password"
            />

            <Input
              label={"Confirmar senha"}
              placeholder="Confirme aqui sua senha"
              type="password"
            />

            <Select label={"Selecionar módulo"}>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
            </Select>

            <Button colorSchema={"negative"} type="submit">
              Cadastrar
            </Button>
          </Form>

          <FormFooter></FormFooter>
        </SignupContainer>
      </Main>
    </>
  );
};

export default Signup;
