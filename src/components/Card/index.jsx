import { Container, TitleTech, TitleLevel } from "./index";

const Card = ({ tech, level }) => {
  return (
    <Container>
      <TitleTech>{tech}</TitleTech>

      <TitleLevel>{level}</TitleLevel>
    </Container>
  );
};

export default Card;
