import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"; 

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	background-color: #aff6cf;
	background-image: linear-gradient(315deg, #aff6cf 0%, #9f98e8 74%);

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	position: absolute;
	background-color: #d5adc8;
	background-image: linear-gradient(315deg, #d5adc8 0%, #ff8489 74%);
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
    border: 3px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
	color: #FF007C;
    display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
    
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Product = ({item}) => {
  return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Link to="/product"> <Icon>
					<SearchOutlined />
				</Icon> </Link>
				
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
  );
}

export default Product
