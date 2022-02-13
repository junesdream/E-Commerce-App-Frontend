import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { mobile } from "../responsive";


const Container = styled.div`
	display: flex;
	background-color: #b3cdd1;
	background-image: linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%);
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1`
 background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Desc = styled.p`
	margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
	color: #2e2d88;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#b3cdd1",
	backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%) "})}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
  return (
		<Container>
			<Left>
				<Logo>RAINBOW</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomised words which do not
					look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				{/* <Link to="#"> */}
				<List >
					<ListItem> Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
				{/* </Link> */}
			</Center> 
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} />Tauzinsenstr. 160, 12409 Berlin, Germany
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +1 234 56 78
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} />
					contact@rainbow.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
  );
}

export default Footer