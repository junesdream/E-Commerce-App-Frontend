import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: #f1dfd1;
	background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
  background-image: -webkit-linear-gradient(left, #f00, #ff2b00, #f50, #ff8000, #fa0, #ffd500, #ff0, #d4ff00, #af0, #80ff00, #5f0, #2bff00, #0f0, #00ff2a, #0f5, #00ff80, #0fa, #00ffd5, #0ff, #00d5ff, #0af, #0080ff, #05f, #002aff, #00f, #2b00ff, #50f, #8000ff, #a0f, #d400ff, #f0f, #ff00d4, #f0a, #ff0080, #f05, #ff002b, #f00);
    -webkit-animation: animatedBackground_a 5s linear infinite alternate;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-clip: text;
    @keyframes animatedBackground_a {
    0% { background-position: 0 0 }
    100% { background-position: -500px 0 }
}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
  background-color: #f1dfd1;
background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-image: linear-gradient(
		to right,
		red,
		orange,
		yellow,
		green,
		blue,
		indigo,
		violet,
		red
	);
	animation: slidebg 2s linear infinite;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;

	@keyframes slidebg {
		to {
			background-position: 20vw;
		}
	}
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;


const Login = () => {
  return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />			
					<Button>LOGIN</Button>
          <Link>Don't you remember to the password?</Link>
          <Link>Create a new account</Link>
				</Form>
			</Wrapper>
		</Container>
  );
}

export default Login