import React from "react";
// Make a component where one can change the coin. This is an extra component/feature that is actually not used (but is there if needed to add later)
const deAccent = (string) => {
	return string
		.split("")
		.map(
			function (letter) {
				let i = this.accents.indexOf(letter);
				return i !== -1 ? this.out[i] : letter;
			}.bind({
				accents:
					"ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź",
				out: "AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz",
			})
		)
		.join("");
};

const ChangeCoin = (props) => {
	return (
		<div>
			<input
				id="coin"
				name="coin"
				variant="outlined"
				placeholder="Input a coin name"
				onChange={(event) => {
					props.setCoin(
						deAccent(event.target.value)
							.replace(/\s+/g, "-")
							.toLowerCase()
					);
				}}
				error={Boolean(props.coinError)}
				helperText={props.coinError}
			/>
		</div>
	);
};

export default ChangeCoin;
