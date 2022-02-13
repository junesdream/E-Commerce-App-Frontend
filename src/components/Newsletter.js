import React from 'react'
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60vh;
	background-color: #9eabe4;
	background-image: linear-gradient(315deg, #9eabe4 0%, #77eed8 74%);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
	${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	${mobile({ width: "80%" })}
`;

const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
  border: 3px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
`;

const Button = styled.button`
	flex: 1;
	border: none;
	 background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:slidebg 5s linear infinite;
	color: white;
`;


const Newsletter = () => {
  return (
		<Container>
			<Title>Newsletter</Title>
			<Desc> Get timely updates from your favorite products. </Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
          <Send />
        </Button>
			</InputContainer>
		</Container>
  );
}

export default Newsletter