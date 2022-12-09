import React from "react";
const BearishTrend = (props) => {
	const prices = props.dayPrices;
	var longestTrend = 0;
	let counter = 0;

	// Get the longest downward trend with for loop.
	for (let i = 1; i < prices.length; i++) {
		if (prices.length === 1) {
			break;
		}
		var priceToday = prices[i][1];
		var priceYesterday = prices[i - 1][1];

		if (priceToday < priceYesterday) {
			counter++;
			if (counter > longestTrend) {
				longestTrend = counter;
			}
		} else if (priceToday >= priceYesterday) {
			counter = 0;
		}
	}

	return (
		<div>
			<p>Longest bearish trend: {longestTrend} days</p>
		</div>
	);
};
export default BearishTrend;
