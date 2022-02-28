import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 60px 0 30px 0;
  max-width: 370px;

  & > button {
    width: 80px;
  }
`;

export const Logo = styled.figure``;

export const LogoImage = styled.img``;

export const Main = styled.main`
  padding: 0 15px 50px 15px;
`;

export const SignupContainer = styled.div`
  background: var(--grey-3);
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  max-width: 370px;

  @media only screen and (min-width: 768px) {
  }
`;

export const FormHeader = styled.header`
  text-align: center;
`;

export const Title = styled.h1`
  font: var(--title-1);
  color: var(--grey-0);
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font: var(--helper-text);
  color: var(--grey-1);
  margin-bottom: 25px;
`;

export const Form = styled.form`
  padding-bottom: 25px;

  & > button {
    margin-top: 5px;
    width: 100%;
  }
`;
