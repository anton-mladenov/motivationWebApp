import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
export const WrapperHeader = styled.section`
  padding: 2.5em;
  background: #0B132B;
`;

export const WrapperMain = styled.section`
  padding: 2.5em;
  background: #5BC0BE;
`;

export const TitleInsideMain = styled.section`
font-size: 25px;
text-align: center;
color: #1C2541;
text-decoration: underline;
margin: 1em
`;

export const TextInsideMain = styled.section`
font-size: 20px;
text-align: center;
color: #1C2541;
margin: 1em;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #6FFFE9;
  margin: 1em;
`;

export const Button = styled.button`
  display: inline-block;
  color: #6FFFE9;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #0B132B;
  border-radius: 5px;
  background: #0B132B;
`;

export const TextInput = styled.input.attrs()`
  color: white;
  font-size: 1em;
  border: 2px solid #0B132B;
  border-radius: 5px;
  padding: 5px;
`
