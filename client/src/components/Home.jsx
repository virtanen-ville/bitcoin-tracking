import React from "react";
import { useState, useEffect } from "react";
import ChangeDates from "./home/ChangeDates";
import ResultsTable from "./home/ResultsTable";
import Navigation from "./Navigation";

const Home = () => {
	const [data, setData] = useState([]);
	const [dataError, setDataError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	// This is here if one would like to change the coin at some point in the future. For now we use a constant variable
	//const [coin, setCoin] = useState("bitcoin");
	const coin = "bitcoin";

	// Set the startDate (start time in UNIX) as yesterdays UTC 00:00
	const [startDate, setStartDate] = useState(
		Math.floor(Date.now() / 1000 / 86400) * 86400 - 86400
	);

	// Set the endDate (end time in UNIX) as todays UTC 01:00
	const [endDate, setEndDate] = useState(
		Math.floor(Date.now() / 1000 / 86400) * 86400 + 3600
	);

	const [url, setUrl] = useState(
		`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=eur&from=${startDate}&to=${endDate}`
	);

	// Fetch the data at component mount and every time the url changes
	useEffect(() => {
		const getData = () => {
			fetch(url)
				.then((res) => res.json())
				.then(
					(result) => {
						setData(result);
						setIsLoaded(true);
					},
					(error) => {
						setIsLoaded(true);
						setDataError(error);
					}
				);
		};
		getData();
	}, [url]);

	if (dataError) {
		return (
			<div className="main-view">
				<h3>Error: {dataError.message}</h3>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div className="main-view">
				<h3 align="center">Loading...</h3>
			</div>
		);
	} else if (data.prices === undefined) {
		return (
			<div className="main-view">
				<h3 align="center">
					There was an error fetching the data. If the problem
					continues, please report to administrator.
				</h3>
			</div>
		);
	} else {
		return (
			<>
				<Navigation />

				<div className="main-view">
					<ChangeDates
						setStartDate={setStartDate}
						setEndDate={setEndDate}
						setUrl={setUrl}
						data={data}
						startDate={startDate}
						endDate={endDate}
						coin={coin}
					/>

					<ResultsTable
						data={data}
						startDate={startDate}
						endDate={endDate}
					/>
				</div>
			</>
		);
	}
};

export default Home;
