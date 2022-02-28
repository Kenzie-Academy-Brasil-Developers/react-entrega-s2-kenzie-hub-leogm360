import {
  Container,
  Label,
  SelectContainer,
  SelectStyled,
  Span,
  Helper,
} from "./index";
import { FaChevronDown } from "react-icons/fa";

const Select = ({ children, label, helper, name, register }) => {
  return (
    <Container>
      <Label>{label}</Label>

      <SelectContainer>
        <SelectStyled {...register(name)}>{children}</SelectStyled>

        <Span>
          <FaChevronDown />
        </Span>
      </SelectContainer>

      <Helper>{helper}</Helper>
    </Container>
  );
};

export default Select;
