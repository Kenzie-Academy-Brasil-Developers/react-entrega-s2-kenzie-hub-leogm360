import api from "../../services/api";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const history = useHistory();

  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Formato inválido!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmitForm = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        toast.success(
          "Login efetuado com sucesso! Você será redirecionado a sua página dentro instantes.",
          { theme: "dark" }
        );

        localStorage.clear();
        localStorage.setItem(
          "@kenziehub:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@kenziehub:id",
          JSON.stringify(response.data.user.id)
        );

        setTimeout(() => {
          setIsAuthenticated(true);
          history.push(`/dashboard/${response.data.user.id}`);
        }, 6000);
      })
      .catch((error) => {
        toast.error("E-mail ou senha inválidos!", { theme: "dark" });
      });
  };

  return isAuthenticated ? (
    <Redirect
      to={`/dashboard/${JSON.parse(localStorage.getItem("@kenziehub:id"))}`}
    />
  ) : (
    <>
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
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

            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Input
                label={"E-mail"}
                placeholder="Digite aqui seu e-mail"
                type="text"
                name={"email"}
                register={register}
                errors={errors}
              />

              <Input
                label={"Senha"}
                hasEye
                placeholder="Digite aqui sua senha"
                type={"password"}
                name={"password"}
                register={register}
                errors={errors}
              />

              <Button type="submit">Entrar</Button>
            </Form>

            <FormFooter>
              <Text>Ainda não possui uma conta?</Text>

              <Button
                colorSchema={"disabled"}
                type="button"
                onClick={() => history.push("/signup")}
              >
                Cadastre-se
              </Button>
            </FormFooter>
          </LoginContainer>
        </Main>
      </motion.div>
    </>
  );
};

export default Login;
