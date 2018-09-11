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

export const TextInsideMain = styled.section`
font-size: 20px;
text-align: center;
color: #1C2541;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  color: #6FFFE9;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0B132B;
  border-radius: 3px;
`;


// export const Title2 = styled.h2`
// 	font-size: 17px;
// 	text-align: center;
// 	background: lightblue;
// 	color: black;
// 	padding: 1em;
// 	font-family: Monaco;
// `
