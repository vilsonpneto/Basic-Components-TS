import styled from "styled-components";

export const Form = styled.form`
  padding: 30px;
  min-width: 320px;

  background-color: #fff;
  color: #168;

  border: 2px black solid;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);

  .error {
    color: var(--color-error);
    font-size: 0.7rem;
  }
`;
