import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";


const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
	${"" /* background-color: black; */}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
     background-image: -webkit-linear-gradient(left, #f00, #ff2b00, #f50, #ff8000, #fa0, #ffd500, #ff0, #d4ff00, #af0, #80ff00, #5f0, #2bff00, #0f0, #00ff2a, #0f5, #00ff80, #0fa, #00ffd5, #0ff, #00d5ff, #0af, #0080ff, #05f, #002aff, #00f, #2b00ff, #50f, #8000ff, #a0f, #d400ff, #f0f, #ff00d4, #f0a, #ff0080, #f05, #ff002b, #f00);
    -webkit-animation: animatedBackground_a 5s linear infinite alternate;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-clip: text;
	${mobile({ fontSize: "24px" })}
    @keyframes animatedBackground_a {
    0% { background-position: 0 0 }
    100% { background-position: -500px 0 }
}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	color: #000;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>

				<Center>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Logo>RIANBOW</Logo>
					</Link>
				</Center>

				<Right>
					<Link to="/register" style={{ textDecoration: "none" }}>
						<MenuItem>REGISTER</MenuItem>
					</Link>
					<Link to="login" style={{ textDecoration: "none" }}>
						<MenuItem>SIGN IN</MenuItem>
					</Link>

					<MenuItem>
						<Link to="/cart">
							<Badge badgeContent={4} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
