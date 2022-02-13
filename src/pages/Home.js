import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";


const Home = () => {
  return (
		<div>
			<Annoucement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
  );
}

export default Home