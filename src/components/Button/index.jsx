import { Container } from "./index";

const Button = ({ children, colorSchema, sizeSchema, ...rest }) => {
  return (
    <Container colorSchema={colorSchema} sizeSchema={sizeSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
