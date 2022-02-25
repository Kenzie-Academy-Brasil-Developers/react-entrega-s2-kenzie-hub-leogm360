import styled from "styled-components";

export const Header = styled.header`
  padding: 60px 15px 30px 15px;
`;

export const Logo = styled.figure`
  text-align: center;
`;

export const LogoImage = styled.img``;

export const Main = styled.main`
  padding: 0 15px 50px 15px;
`;

export const LoginContainer = styled.div`
  background: var(--grey-3);
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  max-width: 370px;
`;

export const FormHeader = styled.header`
  text-align: center;
  padding: 25px 0 15px 0;
`;

export const Title = styled.h1`
  font: var(--title-1);
  color: var(--grey-0);
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font: var(--helper-text);
  text-align: center;
  color: var(--grey-1);
  margin-bottom: 25px;
`;

export const Form = styled.form`
  & > button {
    margin-top: 5px;
    width: 100%;
  }
`;

export const FormFooter = styled.footer`
  margin-top: 30px;
  padding-bottom: 25px;

  & > button {
    margin-top: 5px;
    width: 100%;
  }
`;
