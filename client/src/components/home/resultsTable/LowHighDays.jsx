import React from "react";
const LowHighDays = (props) => {
	const prices = props.dayPrices;

	// Get a printable date of the price inserted as parameter.
	const getDateOfPrice = (datePrice) => {
		let valueDateUnix;

		// Assume that a price only appears once in the array (otherwise we need to use different functions for miniumum and maximum - This is ok for maximum, but for minimum we would need to break the loop at first match)
		prices.forEach((price) => {
			if (price[1] === datePrice) {
				valueDateUnix = price[0];
			}
		});
		var valueDate = new Date(valueDateUnix);
		var valueDateYear = valueDate.getFullYear();
		var valueDateMonth = valueDate.getMonth() + 1;
		var valueDateDate = valueDate.getDate();
		return `${valueDateDate}.${valueDateMonth}.${valueDateYear}`;
	};

	// Get the max difference where max is later than min. Also keep track of the local min and max values. Return the values in an array.
	const getMaxDifference = (array) => {
		if (array.length === 0) {
			return [-1, -1, -1];
		}
		if (array.length === 1) {
			return [0, array[0][1], array[0][1]];
		}
		var globalMin = array[0][1];
		var localMin = array[0][1];
		var localMax = array[0][1];
		var maxDifference = 0;

		for (let i = 0; i < array.length; i++) {
			maxDifference = Math.max(maxDifference, array[i][1] - globalMin);
			if (maxDifference === array[i][1] - globalMin) {
				localMax = array[i][1];
				localMin = globalMin;
			}
			globalMin = Math.min(globalMin, array[i][1]);
		}
		return [maxDifference, localMin, localMax];
	};

	var difference = getMaxDifference(prices)[0];
	var minimum = getMaxDifference(prices)[1];
	var maximum = getMaxDifference(prices)[2];

	var minValueDate = getDateOfPrice(minimum);
	var maxValueDate = getDateOfPrice(maximum);

	if (minimum >= maximum) {
		return (
			<div>
				<p>You should not buy or sell during this time.</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>
					Best day to buy: {minValueDate}
					<br />
					At price: {minimum.toFixed(2)} €
					<br /> <br />
					Best day to sell: {maxValueDate}
					<br />
					At price: {maximum.toFixed(2)} €
					<br /> <br />
					Profit made: {((difference / minimum) * 100).toFixed(2)} %
				</p>
			</div>
		);
	}
};
export default LowHighDays;
