import { NumberStyled } from "./Number.styled"

export const Number = ({ number }) => {
  return <NumberStyled width={number.width}>{number.number}</NumberStyled>
  // return <div style={{width:number.width, backgroundColor: "red"}}>{number.number}</div>
  // return <div>{number.number}</div>
}