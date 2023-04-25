import React from "react";
import "./Calculator.css";
import Button from "../Button/Button";

export default function Calculator() {
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
      case "%":
        setScreen((screen / 100).toString());
        break;
      case "backspace":
        screen.length === 1 
          ? setScreen("0") 
          : setScreen(screen.substring(0, screen.length - 1));
        break;
      case "÷":
        setOperation("div");
        if (!total) setTotal(screen);
        setScreen("0");
        break;
      case "=":
        setTotal(handleCalc(screen, operation, total));
        setScreen(handleCalc(screen, operation, total));
        break;
      case "+":
        setOperation("add");
        if (!total) setTotal(screen);
        setScreen("0");
        break;
      case "-":
        setOperation("sub");
        if (!total) setTotal(screen);
        setScreen("0");
        break;
      case "×":
        setOperation("mult");
        if (!total) setTotal(screen);
        setScreen("0");
        break;
      case ".":
        if (!screen.includes(".")) {
          setScreen(screen + ".");
        }
        break;
			default:
				screen === "0" && screen.length < 10
					? setScreen(e.target.value)
					: setScreen(screen + e.target.value);
		}
	};

	window.addEventListener('keyup', function(event) {
		if (event.key === "Backspace" ) {
			screen.length === 1 
			? setScreen("0") 
			: setScreen(screen.substring(0, screen.length - 1));
		}
		else if (event.key === "+" ) {
			setOperation("add");
			if (!total) setTotal(screen);
			setScreen("0");
		}
		else if (event.key === "-" ) {
			setOperation("sub");
			if (!total) setTotal(screen);
			setScreen("0");
		}
		else if (event.key === "*" ) {
			setOperation("mult");
			if (!total) setTotal(screen);
			setScreen("0");
		}
		else if (event.key === "/") {
			setOperation("div");
			if (!total) setTotal(screen);
			setScreen("0");
		}
		else if (event.key === '=' || event.key === 'Enter') {
			setTotal(handleCalc(screen, operation, total));
			setScreen(handleCalc(screen, operation, total));
			setTotal(screen);
		}
		else if (event.key === "Delete") {
			setScreen("0");
			setTotal();
		}
		else if (event.keyCode === 16) {
			setScreen(screen);
		}
		else if (
			      event.key === "0" || 
		          event.key === "1" || 
				  event.key === "2" || 
				  event.key === "3" || 
				  event.key === "4" || 
				  event.key === "5" || 
				  event.key === "6" || 
				  event.key === "7" || 
				  event.key === "8" || 
				  event.key === "9" 
				) {
			screen === "0" && screen.length < 10
			? setScreen(event.key)
			: setScreen(screen + event.key);
		}
		else if (event.key === "." ||  event.key === ",") {
			setScreen(screen + ".");
	    }
		else if (event.key === "%") {
			setScreen((screen / 100).toString());
	    }
	}); 

	return (
	<main>
      <div className="calculator">
			  <div className="screen-container">
				  <span className="screen">{screen}</span>
			  </div>
			  <div id="buttons" className="button-row">
				  <Button name="number" onClick={handleInput} value={"AC"} />
				  <Button name="number" onClick={handleInput} value={"+/-"} />
				  <Button name="number" onClick={handleInput} value={"%"} />
          <Button name="operation delete"onClick={handleInput} value={"backspace"} />
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
          <Button name={"operation"} onClick={handleInput} value={"-"} />
  			</div>
				<div id="buttons" className="button-row">
          <Button name="number" onClick={handleInput} value={"."} />
	 				<Button name="number" onClick={handleInput} value={"0"} />
		  		<Button name="number" onClick={handleInput} value={"="} />
          <Button name="operation" onClick={handleInput} value={"+"} />
			  </div>
      </div>
	</main>
	);
}
