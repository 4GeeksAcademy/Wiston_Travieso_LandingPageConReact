import React from "react";

//include images into your bundle
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<div className="container">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>

	);
};

export default Home;
