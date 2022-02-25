import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 99999;
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(50%);
  transition: 0.5s;
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

    :hover {
      background: var(--negative);
    }
  }

  & > button > svg {
    width: 10px;
    height: 10px;
  }
`;

export const Title = styled.h2`
  font: var(--headline-bold);
  color: var(--grey-0);
`;

export const Form = styled.form`
  padding: 0 15px;

  & select + span {
    transform: translateX(235px);
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 15px 15px 15px;

  & > button {
  }
`;
