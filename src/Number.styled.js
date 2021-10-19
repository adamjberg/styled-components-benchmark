import styled from "styled-components";

export const NumberStyled = styled.div
// .attrs(({ width }) => ({
//   style: {
//     width: `${width}px`,
//   }
// }))
`
  width: ${({ width }) => width}px;
  background-color: red;
`