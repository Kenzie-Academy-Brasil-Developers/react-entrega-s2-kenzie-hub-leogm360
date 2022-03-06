import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

import {
  Container,
  RegisterContainer,
  Header,
  Title,
  Form,
  ContainerButtons,
} from "./index";
import Button from "../Button/index.jsx";
import Input from "../Inputs/index.jsx";
import Select from "../Select/index.jsx";
import { ImCross } from "react-icons/im";

const ModalDetails = ({
  setIsModalDetailsOpen,
  tech,
  argumentsArray,
  callback,
  token,
}) => {
  const detailsSchema = yup.object().shape({
    status: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(detailsSchema) });

  const onSubmitForm = (data, event) => {
    const isSaving = event.nativeEvent.submitter.value;

    if (isSaving === "true") {
      api
        .put(`/users/techs/${tech.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success("Tecnologia atualizada com sucesso!", {
            theme: "dark",
          });

          callback(...argumentsArray);
        })
        .catch((error) =>
          toast.error("Não é possível atualizar uma tecnologia inexistente!", {
            theme: "dark",
          })
        );
    } else if (isSaving === "false") {
      api
        .delete(`/users/techs/${tech.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success("Tecnologia excluida com sucesso!", { theme: "dark" });

          callback(...argumentsArray);
        })
        .catch((error) =>
          toast.error("Não é possível atualizar uma tecnologia inexistente!", {
            theme: "dark",
          })
        );
    }
  };

  return (
    <Container>
      <ToastContainer />

      <RegisterContainer>
        <Header>
          <Title>Tecnologia Detalhes</Title>

          <Button
            sizeSchema={"square"}
            onClick={() => setIsModalDetailsOpen((state) => !state)}
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
            value={tech.title}
            disabled
          />

          <Select label={"Status"} name={"status"} register={register}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <ContainerButtons>
            <Button colorSchema={"negative"} value={true} type="submit">
              Salvar alterações
            </Button>

            <Button colorSchema={"disabled"} value={false} type="submit">
              Excluir
            </Button>
          </ContainerButtons>
        </Form>
      </RegisterContainer>
    </Container>
  );
};

export default ModalDetails;
