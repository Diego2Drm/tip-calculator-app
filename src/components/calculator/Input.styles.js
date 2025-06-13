import styled from "styled-components"
import { Theme } from "../../GlobalStyle"

export const Section = styled.section`
margin-top: ${props => props.$primary ? "3rem" : "3rem"};
width: 100%;
background: ${props => props.$primary ? Theme.colors.Green900 : "transparent"};
padding: ${props => props.$primary ? "2rem" : "0"};
border-radius: ${props => props.$primary ? "1.5rem" : "0"};
height: 100%;
@media (min-width: 628px){
  margin-top: ${props => props.$primary && "0rem"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`
export const DivContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
gap: .5rem;
`
export const Title = styled.p`
color: ${Theme.colors.Grey500};
font-weight: 600;
font-size: 1.5rem;
`
export const Input = styled.input`
width: 100%;
padding: 1rem;
border-radius: 1rem;
border: 2px solid ${({$hasData}) => ($hasData ? "red" : "transparent")};
background: ${Theme.colors.Grey50};
color: ${Theme.colors.Green900};
font-weight: bolder;
font-size: 1.8rem;
text-align: end;
box-shadow: 0 0 .5rem ${Theme.colors.Grey200};
font-family: "Space Mono", monospace;
cursor: pointer;
&::placeholder{
  color: ${Theme.colors.Grey400};
}
&:focus{
  outline: 2px solid ${Theme.colors.Green400};
}
&:hover{
  outline: 2px solid ${Theme.colors.Green400};
}
`
export const DivInput = styled.div`
position: relative;
`
export const Img = styled.img`
position: absolute;
top: 50%;
left: 1rem;
transform: translateY(-50%);
`

// Active States
export const TextError = styled.p`
font-size: 1.2rem;
font-weight: bold;
color: red;
`