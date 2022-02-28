import { useState } from "react";

import {
  Container,
  Label,
  SpanError,
  InputContainer,
  InputStyled,
  Span,
  HelperText,
} from "./index";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
  label,
  helper,
  hasEye,
  type,
  name,
  register,
  errors,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Label>
        {label}
        <SpanError>{!!errors[name] && ` - ${errors[name].message}`}</SpanError>
      </Label>

      <InputContainer>
        <InputStyled
          type={visible ? "text" : type}
          {...rest}
          {...register(name)}
        />

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
