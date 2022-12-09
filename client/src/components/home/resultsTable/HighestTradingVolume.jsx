import React from "react";
const HighestTradingVolume = (props) => {
	const volumes = props.volumes;
	// We could use Math.max(...volumes[1]) and Math.min(...volumes[1]), but that can exceed JavaScript limit with very big arrays.
	var maxVolume = volumes.reduce(function (a, b) {
		return Math.max(a, b[1]);
	}, 0);
	var maxVolumeDayUnix;
	volumes.forEach((volume) => {
		if (volume[1] === maxVolume) {
			maxVolumeDayUnix = volume[0];
		}
	});

	var maxVolumeDay = new Date(maxVolumeDayUnix);
	var maxVolumeYear = maxVolumeDay.getFullYear();
	var maxVolumeMonth = maxVolumeDay.getMonth() + 1;
	var maxVolumeDate = maxVolumeDay.getDate();
	// console.log("maxVolume =", maxVolume);
	// console.log("maxVolumeDay =", maxVolumeDay);

	return (
		<div>
			<p>
				Day with highest 24h volume: {maxVolumeDate}.{maxVolumeMonth}.
				{maxVolumeYear}
				<br />
				24h volume: {maxVolume.toFixed(2)}
			</p>
		</div>
	);
};
export default HighestTradingVolume;
