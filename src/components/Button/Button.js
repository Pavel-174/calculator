import React from "react";
import "./Button.scss";

export default function Button( {value, onClick, name} ) {
	return (
		<button value={value} onClick={onClick} className={name}>
			{value} 
		</button>
	);
}
