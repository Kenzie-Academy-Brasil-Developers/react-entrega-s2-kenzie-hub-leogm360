import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

import { Container, RegisterContainer, Header, Title, Form } from "./index";
import Button from "../Button/index.jsx";
import Input from "../Inputs/index.jsx";
import Select from "../Select/index.jsx";
import { ImCross } from "react-icons/im";

const ModalRegister = ({
  setIsModalRegisterOpen,
  argumentsArray,
  callback,
  token,
}) => {
  const registerSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup.string().default("Iniciante"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmitForm = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia inserida com sucesso!", { theme: "dark" });

        callback(...argumentsArray);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("A tecnologia já existe!", { theme: "dark" });
      });
  };

  return (
    <Container>
      <ToastContainer />

      <RegisterContainer>
        <Header>
          <Title>Cadastrar Tecnologia</Title>

          <Button
            sizeSchema={"square"}
            onClick={() => setIsModalRegisterOpen((state) => !state)}
          >
            <ImCross />
          </Button>
        </Header>

        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            label={"Nome"}
            name={"title"}
            register={register}
            errors={errors}
            placeholder="Tecnologia*"
          />

          <Select
            label={"Selecionar status"}
            name={"status"}
            register={register}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <Button type="submit">Cadastrar Tecnologia</Button>
        </Form>
      </RegisterContainer>
    </Container>
  );
};

export default ModalRegister;
