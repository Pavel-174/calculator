/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [total, setTotal] = React.useState();
	const [screen, setScreen] = React.useState("0");
	const [operation, setOperation] = React.useState("");

	const handleCalc = (input, operation, total) => {
		switch (operation) {
			case "add":
				return (+input + +total).toString();
			case "sub":
				return (total - input).toString();
			case "mult":
				return (total * input).toString();
			case "div":
				return (total / input).toString();
			default:
		}
	};

	return (
		<>
			<body>
				<main>
          <div className="calculator">
					  <div className="screen-container">
						  <h1 className="screen">000</h1>
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" value={"AC"} />
						  <Button name="number" value={"+/-"} />
						  <Button name="number" value={"%"} />
              <Button name="operation delete" value={""} />
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" value={7} />
						  <Button name="number" value={8} />
						  <Button name="number" value={9} />
              <Button name="operation" value={"÷"} />						
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" value={4} />
						  <Button name="number" value={5} />
						  <Button name="number" value={6} />
              <Button name="operation" value={"×"} />						
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" value={1} />
						  <Button name="number" value={2} />
						  <Button name="number" value={3} />
              <Button name={"operation"} value={"−"} />
  					</div>
	  				<div id="buttons" className="button-row">
		  				<Button name="number" value={"0"} />
			  			<Button name="number" value={"."} />
				  		<Button name="number" value={"="} />
              <Button name="operation" value={"+"} />
					  </div>
          </div>
				</main>
			</body>
		</>
	);
}

export default App;
