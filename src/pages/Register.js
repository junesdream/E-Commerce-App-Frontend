import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.3)
		),
		url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlciUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
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
    font-weight: bold;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:slidebg 5s linear infinite;;
	color: #000;
	cursor: pointer;
`;

const Register = () => {
  return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="name" />
					<Input placeholder="last name" />
					<Input placeholder="username" />
					<Input placeholder="email" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Agreement>
						By creating an account, I consent to the processing of
						my personal data in accordance with the
						<b> PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
  );
}

export default Register