import { useState } from "react";

import {
  Container,
  Label,
  InputContainer,
  InputStyled,
  Span,
  HelperText,
} from "./index";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({ label, helper, hasEye, type, ...rest }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer>
        <InputStyled type={visible ? "text" : type} {...rest} />

        <Span
          onClick={(event) => setVisible((state) => !state)}
          hasEye={hasEye}
        >
          {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </Span>
      </InputContainer>

      <HelperText>{helper}</HelperText>
    </Container>
  );
};

export default Input;
