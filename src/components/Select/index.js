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

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: var(--grey-2);
  border: 1.5px solid transparent;
  border-radius: 4px;

  :focus-within {
    border: 1.5px solid var(--grey-0);
  }

  :focus-within > span > svg {
    transition: 0.5s;
    transform: rotate(180deg);
  }
`;

export const SelectStyled = styled.select`
  //RESET SELECT
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  //NEW STYLES
  font-family: "Inter";
  font-size: 1rem;
  background: var(--grey-2);
  color: var(--grey-0);
  border: none;
  border-radius: 4px;
  padding: 0 15px;
  width: 100%;
  height: 50px;

  :focus {
    outline: none;
  }
`;

export const Span = styled.span`
  position: absolute;
  transform: translateX(270px);

  & > svg {
    color: var(--grey-0);
    width: 15px;
    height: 15px;
    transition: 0.5s;
  }
`;

export const Helper = styled.p``;
