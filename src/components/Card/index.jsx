import { Container, TitleTech, TitleLevel } from "./index";

const Card = ({ title, status, ...rest }) => {
  return (
    <Container {...rest}>
      <TitleTech>{title}</TitleTech>

      <TitleLevel>{status}</TitleLevel>
    </Container>
  );
};

export default Card;
