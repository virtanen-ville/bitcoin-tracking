import React from "react";
const Footer = (props) => {
	var currentYear = new Date().getFullYear();
	return (
		<footer>
			<h4 align="center">
				Copyright &copy; Ville Virtanen {currentYear}
			</h4>
			<address align="center">
				ville.o.virtanen@icloud.com <br />
				044 342 5088
			</address>
		</footer>
	);
};

export default Footer;
