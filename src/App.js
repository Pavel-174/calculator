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

  const handleInput = (e) => {
		switch (e.target.value) {
      case "AC":
	      setScreen("0");
	      setTotal();
	      break;
      case "+/-":
        screen.charAt(0) !== "-"
          ? screen !== "0"
            ? setScreen("-" + screen)
            : setScreen(screen)
          : setScreen(screen.substring(1, screen.length));
          break;
			default:
				screen === "0" && screen.length < 10
					? setScreen(e.target.value)
					: setScreen(screen + e.target.value);
		}
	};

	return (
		<>
			<body>
				<main>
          <div className="calculator">
					  <div className="screen-container">
						  <h1 className="screen">{screen}</h1>
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" onClick={handleInput} value={"AC"} />
						  <Button name="number" onClick={handleInput} value={"+/-"} />
						  <Button name="number" onClick={handleInput} value={"%"} />
              <Button name="operation delete"onClick={handleInput} value={""} />
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" onClick={handleInput} value={7} />
						  <Button name="number" onClick={handleInput} value={8} />
						  <Button name="number" onClick={handleInput} value={9} />
              <Button name="operation" onClick={handleInput} value={"÷"} />						
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" onClick={handleInput} value={4} />
						  <Button name="number" onClick={handleInput} value={5} />
						  <Button name="number" onClick={handleInput} value={6} />
              <Button name="operation" onClick={handleInput} value={"×"} />						
					  </div>
					  <div id="buttons" className="button-row">
						  <Button name="number" onClick={handleInput} value={1} />
						  <Button name="number" onClick={handleInput} value={2} />
						  <Button name="number" onClick={handleInput} value={3} />
              <Button name={"operation"} onClick={handleInput} value={"−"} />
  					</div>
	  				<div id="buttons" className="button-row">
		  				<Button name="number" onClick={handleInput} value={"0"} />
			  			<Button name="number" onClick={handleInput} value={"."} />
				  		<Button name="number" onClick={handleInput} value={"="} />
              <Button name="operation" onClick={handleInput} value={"+"} />
					  </div>
          </div>
				</main>
			</body>
		</>
	);
}

export default App;
