import styled from "styled-components";

interface IFlexContainerProps {
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
  alignItems?: "center" | "start" | "end" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
  width: 100%;
  display: flex;

  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};

  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  gap: ${(props) => props.gap || "20px"};

  padding: 10px;
`;
