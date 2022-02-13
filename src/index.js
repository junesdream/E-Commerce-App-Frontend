import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";  
import ProductPage from "./pages/Product";  

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />

			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/productlist" element={<ProductList />} />
			<Route path="/product" element={<ProductPage />} />
		</Routes>
	</Router>,

	document.getElementById("root")
);