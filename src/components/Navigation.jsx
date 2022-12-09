import React from "react";
// Make a Navigation Bar as extra feature (or future implementation). This component is only used to show ReactRouter possibilities for future expansion. Only Home and About pages are used for now
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import scrooge from "../assets/scrooge.png";
import Title from "./Title";

function Navigation(props) {
	const navigate = useNavigate();

	return (
		<div className="header-div">
			<header>
				<img src={scrooge} alt="Scrooge McDuck" />
				<nav>
					<ul className="nav-ul">
						<li>
							<a
								onClick={() => {
									navigate("/");
								}}
								href="#"
							>
								Home
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/wallet");
								}}
								href="#"
							>
								Wallet
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/prices");
								}}
								href="#"
							>
								Prices
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/about");
								}}
								href="#"
							>
								About
							</a>
						</li>
					</ul>
				</nav>
				<Title />
			</header>
		</div>
	);
}

export default Navigation;
