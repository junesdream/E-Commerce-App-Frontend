import React from 'react';
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
     border: none;
	background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:slidebg 5s linear infinite;
	${'' /* color: black;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"}; */}
`;

const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
	background-color: #c9c0bb;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 2px solid silver;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
    border: none;
	background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:slidebg 5s linear infinite;
	color: black;
	font-weight: 600;
`;



const Cart = () => {
  return (
		<Container>
			<Navbar />
			<Annoucement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(3)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?b=1&k=20&m=1278802435&s=170667a&w=0&h=66zjl1eo9fICf3iuuzUu6xwJJfZPbSfIEp85HEvEbFc=" />
								<Details>
									<ProductName>
										<b>Product:</b> Norah Wool Shirt
									</ProductName>
									<ProductId>
										<b>ID:</b> 93813718293
									</ProductId>
									<ProductColor color="gold" />
									<ProductSize>
										<b>Size:</b> 38
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>€ 30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://media.istockphoto.com/photos/blue-jean-denim-picture-id175518524?b=1&k=20&m=175518524&s=170667a&w=0&h=BNeRjCkMgYWrvGzrNcgzRsEZVkbt9YJGua91g0ZAkEU=" />
								<Details>
									<ProductName>
										<b>Product:</b> Sori Denim
									</ProductName>
									<ProductId>
										<b>ID:</b> 93813718293
									</ProductId>
									<ProductColor color="lightblue" />
									<ProductSize>
										<b>Size:</b> 32
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>€ 40</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />

						<Product>
							<ProductDetail>
								<Image src="https://media.istockphoto.com/photos/red-sweatshirt-on-white-background-picture-id154960461?b=1&k=20&m=154960461&s=170667a&w=0&h=gJ1HdECWI5tZUxSBZmtBgWp-1HNi8QkoUavn2jAbWFs=" />
								<Details>
									<ProductName>
										<b>Product:</b> Funky Hoodie
									</ProductName>
									<ProductId>
										<b>ID:</b> 93813793847
									</ProductId>
									<ProductColor color="red" />
									<ProductSize>
										<b>Size:</b> 38
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>€ 15</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 85</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping
							</SummaryItemText>
							<SummaryItemPrice>€ 4.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>€ -4.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>€ 85</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
  );
}

export default Cart