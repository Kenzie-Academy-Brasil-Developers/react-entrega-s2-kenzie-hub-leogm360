import api from "../../services/api";
import { useHistory } from "react-router-dom";
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
  SignupContainer,
  FormHeader,
  Title,
  Text,
  Form,
} from "./index";
import Button from "../../components/Button/index.jsx";
import Input from "../../components/Inputs/index.jsx";
import Select from "../../components/Select/index.jsx";

const Signup = () => {
  const history = useHistory();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Formato inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "A senha deve ter 6 caracteres no mínimo!"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "Os campos não coincidem!"),
    module: yup.string().default("Primeiro Módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmitForm = (data) => {
    delete data.confirmPassword;
    data["bio"] = "Sem bio";
    data["contact"] = "Sem contatos";

    api
      .post("/users", data)
      .then((response) => {
        toast.success(
          "Cadastro efetuado com sucesso! Você será redirecionado a página de login dentro instantes.",
          { theme: "dark" }
        );

        setTimeout(() => history.push("/login"), 5500);
      })
      .catch((error) => {
        toast.error("O e-mail já existe!", { theme: "dark" });
      });
  };

  return (
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

          <Button
            colorSchema={"grey"}
            sizeSchema={"small"}
            onClick={() => history.push("/")}
          >
            Voltar
          </Button>
        </Header>

        <Main>
          <SignupContainer>
            <FormHeader>
              <Title>Crie sua conta</Title>

              <Text>Rápido e grátis, vamos nessa</Text>
            </FormHeader>

            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Input
                label={"Nome"}
                placeholder="Digite aqui seu nome"
                type="text"
                name={"name"}
                register={register}
                errors={errors}
              />

              <Input
                label={"Email"}
                placeholder="Digite aqui seu email"
                type="email"
                name={"email"}
                register={register}
                errors={errors}
              />

              <Input
                label={"Senha"}
                placeholder="Digite aqui sua senha"
                type="password"
                name={"password"}
                register={register}
                errors={errors}
              />

              <Input
                label={"Confirmar senha"}
                placeholder="Confirme aqui sua senha"
                type="password"
                name={"confirmPassword"}
                register={register}
                errors={errors}
              />

              <Select
                label={"Selecionar módulo"}
                name={"course_module"}
                register={register}
              >
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>

                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>

                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>

                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo
                </option>
              </Select>

              <Button colorSchema={"negative"} type="submit">
                Cadastrar
              </Button>
            </Form>
          </SignupContainer>
        </Main>
      </motion.div>
    </>
  );
};

export default Signup;
