import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 5px 30px;
  max-width: 400px;

  background-color: #359bc4;
  color: var(--color-secondary);

  &:disabled {
    filter: opacity(0.7);
  }
`;
