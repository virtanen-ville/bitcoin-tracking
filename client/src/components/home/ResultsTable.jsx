import React from "react";
import { useState, useEffect } from "react";
import BearishTrend from "./resultsTable/BearishTrend";
import LowHighDays from "./resultsTable/LowHighDays";
import HighestTradingVolume from "./resultsTable/HighestTradingVolume";

const ResultsTable = (props) => {
	let volumes = props.data.total_volumes;
	//let endTime = props.endDate * 1000;
	const [dayPrices, setDayPrices] = useState([]);

	let prices = props.data.prices;
	//console.log("startTime = ", startTime, "endTime = ", endTime);

	// Collect an array that contains only prices that are cloest to UTC 00:00. We do this inside useEffect that runs when props.data is updated. Otherwise the array would update when changing dates (now it only updates after pressing the "Change Date Range" button)
	useEffect(() => {
		let startTime = props.startDate * 1000;

		let dayPriceArray = [];

		for (let i = 0; i <= props.data.prices.length - 1; i++) {
			if (prices[i][0] >= startTime) {
				dayPriceArray.push(prices[i]);
				startTime += 86400000;
			}
		}

		setDayPrices(dayPriceArray);
	}, [props.data, prices]); // eslint-disable-line react-hooks/exhaustive-deps
	// Not the best solution to disable warning here, but it is unnecessary and unwanted

	if (dayPrices.length === 0) {
		return (
			<div className="results-table">
				<h1>Results:</h1>
				<p>
					Please select a date range where the start date is earlier
					than the end date.
				</p>
			</div>
		);
	} else {
		return (
			<div className="results-table">
				<h1>Results:</h1>
				<BearishTrend dayPrices={dayPrices} />
				<br />

				<LowHighDays dayPrices={dayPrices} />
				<br />

				<HighestTradingVolume volumes={volumes} />
			</div>
		);
	}
};

export default ResultsTable;
