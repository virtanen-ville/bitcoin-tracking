import React from "react";
import MyButton from "../MyButton";

const ChangeDates = (props) => {
	// Onclick changes the api url where to fetch data. This also launches the getData function in Home component as url is a dependency in the useEffect hook.
	const handleClick = () => {
		props.setUrl(
			`https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart/range?vs_currency=eur&from=${props.startDate}&to=${props.endDate}`
		);
	};
	// Get the default values for the datepickers.
	let today = new Date().toISOString().substr(0, 10);
	let yesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
		.toISOString()
		.substr(0, 10);

	//Make sure the enddate is after startdate. Use these as min/max values in th einput fields.
	let startDateString = new Date(props.startDate * 1000)
		.toISOString()
		.substr(0, 10);
	let endDateString = new Date(props.endDate * 1000)
		.toISOString()
		.substr(0, 10);

	return (
		<div className="ChangeDates">
			<div className="date-pickers">
				<div className="date-picker">
					<label htmlFor="startDate">Start date:</label> <br />
					<input
						id="startDate"
						name="startDate"
						max={endDateString}
						defaultValue={yesterday}
						onChange={(event) => {
							// Set the start time as UTC 00:00
							props.setStartDate(
								Date.parse(event.target.value) / 1000
							);
						}}
						type="date"
					></input>
				</div>
				<div className="date-picker">
					<label htmlFor="endDate">End date:</label>
					<br />
					<input
						id="endDate"
						name="endDate"
						min={startDateString}
						max={today}
						defaultValue={today}
						onChange={(event) => {
							// Set the end time as UTC 00:00 +1 hour (so 01:00)
							props.setEndDate(
								Date.parse(event.target.value) / 1000 + 3600
							);
						}}
						type="date"
					></input>
				</div>
			</div>
			<div className="date-button">
				<MyButton onClick={handleClick}>Change Date Range</MyButton>
			</div>
		</div>
	);
};

export default ChangeDates;
