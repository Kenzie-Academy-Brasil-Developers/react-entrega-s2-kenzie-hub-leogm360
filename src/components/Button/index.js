import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => {
    switch (props.colorSchema) {
      case "grey":
        return "var(--grey-3)";
      case "negative":
        return "var(--color-primary-negative)";
      case "disabled":
        return "var(--grey-1)";
      default:
        return "var(--color-primary)";
    }
  }};
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: ${(props) => {
    switch (props.sizeSchema) {
      case "square":
        return "12px 12px";
      case "small":
        return "5px 15px";
      default:
        return "10.5px 20px";
    }
  }};
  transition: 0.5s;

  @media only screen and (min-width: 1024px) {
    :hover {
      background: ${(props) => {
        switch (props.colorSchema) {
          case "grey":
            return "var(--grey-2)";
          case "negative":
            return undefined;
          case "disabled":
            return "var(--grey-2)";
          default:
            return "var(--color-primary-focus)";
        }
      }};
    }
  }
`;
