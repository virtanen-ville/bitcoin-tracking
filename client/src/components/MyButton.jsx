import React from "react";
// Reusable button that handles the onClick set in props and with text that is the child of the element.
const MyButton = (props) => {
	return <button onClick={props.onClick}>{props.children}</button>;
};
export default MyButton;
