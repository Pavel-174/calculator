import React from "react";
import "./Button.css";

export default function Button(props) {
	return (
		<button value={props.value} onClick={props.onClick} className={props.name}>
			{props.value} 
		</button>
	);
}
