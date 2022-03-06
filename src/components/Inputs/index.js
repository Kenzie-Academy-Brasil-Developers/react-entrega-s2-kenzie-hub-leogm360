import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px 0;
`;

export const Label = styled.h2`
  font: var(--headline);
  color: var(--grey-0);
`;

export const SpanError = styled.span`
  font: var(--headline);
  color: var(--negative);
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--grey-2);
  border: 1.5px solid transparent;
  border-radius: 4px;
  padding: 5px 15px;
  height: 50px;
  box-sizing: border-box;

  :focus-within {
    border: 1.5px solid var(--grey-0);
  }
`;

export const InputStyled = styled.input`
  font-family: "Inter";
  font-size: 1rem;
  background: var(--grey-2);
  color: ${(props) => (!!props.disabled ? "var(--grey-1)" : "var(--grey-0)")};
  border: none;
  width: 100%;

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: var(--grey-0);
  }
`;

export const Span = styled.span`
  display: ${({ hasEye }) => (hasEye ? "flex" : "none")};
  cursor: pointer;

  & > svg {
    color: var(--grey-1);
  }
`;

export const HelperText = styled.p`
  font: var(--helper-text);
  color: var(--grey-0);
`;
