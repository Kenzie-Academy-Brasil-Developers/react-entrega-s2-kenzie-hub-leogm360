import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 99999;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2.5px);
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  overflow: hidden;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: var(--grey-3);
  border-radius: 4px;
  width: 300px;
  gap: 15px 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--grey-2);
  border-radius: 4px 4px 0 0;
  padding: 10px 15px;
  height: 40px;

  & > button {
    display: flex;
    background: transparent;
    border-radius: 50%;
    padding: 5px;

    & > svg {
      width: 10px;
      height: 10px;
    }

    @media only screen and (min-width: 1024px) {
      :hover {
        background: var(--negative);
      }
    }
  }
`;

export const Title = styled.h2`
  font: var(--headline-bold);
  color: var(--grey-0);
`;

export const Form = styled.form`
  padding: 0 15px 30px 15px;

  & > button {
    margin-top: 15px;
    width: 100%;
  }
`;

export const Footer = styled.footer``;
