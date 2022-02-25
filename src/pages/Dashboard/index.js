import styled from "styled-components";

export const Header = styled.header``;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 25px 15px;
  max-width: 780px;

  @media only screen and (min-width: 768px) {
    padding: 25px 0;
  }
`;

export const Logo = styled.figure``;

export const LogoImage = styled.img``;

export const Rule = styled.hr`
  background: var(--grey-3);
  border: none;
  height: 1px;
`;

export const BottomContainer = styled.div`
  margin: 0 auto;
  padding: 25px 15px;
  max-width: 780px;

  @media only screen and (min-width: 768px) {
    padding: 25px 0;
  }
`;

export const TitleHeader = styled.h1`
  font: var(--title-1);
  color: var(--grey-0);
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font: var(--helper-text);
  color: var(--grey-1);
`;

export const Main = styled.main`
  padding: 0 15px 50px 15px;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 25px 0;
  max-width: 780px;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 32px;
    height: 32px;

    & > svg {
      width: 11px;
      height: 11px;
    }
  }
`;

export const TitleMainHeader = styled.h1`
  font: var(--title-1);
  color: var(--grey-0);
`;

export const Board = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  background: var(--grey-3);
  margin: 0 auto;
  padding: 20px 8.5px;
  max-width: 780px;
  gap: 15px 0;
`;
