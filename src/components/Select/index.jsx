import {
  Container,
  Label,
  SelectContainer,
  SelectStyled,
  Span,
  Helper,
} from "./index";
import { FaChevronDown } from "react-icons/fa";

const Select = ({ children, label, helper }) => {
  return (
    <Container>
      <Label>{label}</Label>

      <SelectContainer>
        <SelectStyled>{children}</SelectStyled>

        <Span>
          <FaChevronDown />
        </Span>
      </SelectContainer>

      <Helper>{helper}</Helper>
    </Container>
  );
};

export default Select;
