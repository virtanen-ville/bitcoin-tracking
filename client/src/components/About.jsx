import React from "react";
import Navigation from "./Navigation";

const About = () => {
	return (
		<>
			<Navigation />

			<div className="main-view">
				<div className="about">
					<h2>Rising Star pre-assignment submission of:</h2>
					<br />
					<h1>Ville Virtanen</h1>
					<br />
					<h2>Instructions:</h2>
					<br />
					<p>
						The Home page provides information on selected date
						range. You can use the date pickers to choose start and
						end dates (note that you can't choose an end date that
						is earlier than the selected start date and vice versa).
						The About page provides use instructions and general
						information about the app. The Wallet and Price pages
						are currently under construction and may be utilized
						later.
					</p>
					<br />
					<h3>The provided information on the Home page includes:</h3>
					<br />
					<p>
						The longest bearish trend of the Bitcoin course during
						the timeframe.
					</p>
					<br />
					<p>
						The best day to buy and to sell on the give timeframe
						(assuming that the buy date must be earlier than the
						sell date - although having a time machine you could
						travel back in time twice, but since bitcoin is virtual
						you couldn't take it with you back in time).
					</p>
					<br />
					<p>
						If the price of bitcoin only goes down on the selected
						date range you shouldn't buy or sell during that time.
					</p>
					<br />
					<p>
						The profit margin to be made during the given date range
					</p>
					<br />
					<p>
						The date which has the highest 24 hour trading volume
						and how much it was.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
