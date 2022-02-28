import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--grey-4);
  color: var(--grey-0);
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: var(--grey-2);
  }
`;

export const TitleTech = styled.h2`
  font: var(--title-1);
`;

export const TitleLevel = styled.h3`
  font: var(--headline);
`;
