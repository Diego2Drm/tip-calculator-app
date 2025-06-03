import styled from "styled-components"
import { Theme } from "../../GlobalStyle"

export const Section = styled.section`
margin-top: 3rem;
width: 100%;
background: ${props => props.$primary ? Theme.colors.Green900 : "transparent"};
padding: ${props => props.$primary ? "2rem" : "0"};
border-radius: ${props => props.$primary ? "1.5rem" : "0"};
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
border: none;
background: ${Theme.colors.Grey50};
color: ${Theme.colors.Green900};
font-weight: bolder;
font-size: 1.8rem;
text-align: end;
box-shadow: 0 0 .5rem ${Theme.colors.Grey200};
font-family: "Space Mono", monospace;
&::placeholder{
  color: ${Theme.colors.Grey400};
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