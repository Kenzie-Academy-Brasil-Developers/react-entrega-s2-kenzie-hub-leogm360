import {
  Header,
  Logo,
  LogoImage,
  Main,
  LoginContainer,
  FormHeader,
  Title,
  Text,
  Form,
  FormFooter,
} from "./index";
import Button from "../../components/Button/index.jsx";
import Input from "../../components/Inputs/index.jsx";

const Login = () => {
  return (
    <>
      <Header>
        <Logo>
          <LogoImage
            src={require("../../assets/img/kenziehub-logo.png")}
            alt="Logotipo do Kenzie Hub"
          />
        </Logo>
      </Header>

      <Main>
        <LoginContainer>
          <FormHeader>
            <Title>Login</Title>
          </FormHeader>

          <Form>
            <Input
              label={"Nome"}
              placeholder="Digite aqui seu nome"
              type="text"
            />

            <Input
              label={"Senha"}
              helper={""}
              hasEye
              placeholder="Digite aqui sua senha"
              type={"password"}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <FormFooter>
            <Text>Ainda não possui uma conta?</Text>

            <Button colorSchema={"disabled"} type="button">
              Cadastre-se
            </Button>
          </FormFooter>
        </LoginContainer>
      </Main>
    </>
  );
};

export default Login;
