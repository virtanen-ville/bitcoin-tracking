import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import CoinPrices from "./components/CoinPrices";
import Wallet from "./components/Wallet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/wallet",
			element: <Wallet />,
		},
		{
			path: "/prices",
			element: <CoinPrices />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
			<Footer />
		</>
	);
};

export default App;
