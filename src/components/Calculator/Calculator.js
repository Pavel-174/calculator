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

    const add = () => {
		setOperation("add");
		if (!total) setTotal(screen);
		setScreen("0");
  	}
    const ac = () => {
		setScreen("0");
		setTotal();	
  	}

  	const percent = () => {
		setScreen((screen / 100).toString());
  	}

  	const backspace = () => {
		screen.length === 1 
		? setScreen("0") 
		: setScreen(screen.substring(0, screen.length - 1));
  	}

  	const div = () => {
		setOperation("div");
		if (!total) setTotal(screen);
		setScreen("0");
  	}

  	const equally = () => {
		setTotal(handleCalc(screen, operation, total));
		setScreen(handleCalc(screen, operation, total));
  	}

  	const sub = () => {
		setOperation("sub");
		if (!total) setTotal(screen);
		setScreen("0");
  	}

  	const mult = () => {
		setOperation("mult");
		if (!total) setTotal(screen);
		setScreen("0");
  	}

  	const point = () => {
		setScreen(screen + ".");
  	}

  	const handleInput = (e) => {
		switch (e.target.value) {

    	  	case "AC":
		ac();
	    break;

      		case "+/-":
        screen.charAt(0) !== "-"
          	? screen !== "0"
        	    ? setScreen("-" + screen)
        	    : setScreen(screen)
        	    : setScreen(screen.substring(1, screen.length));
        break;

      	case "%":
        	percent();
        break;

      	case "backspace":
			backspace();
        break;
      	case "÷":
			div();
        break;

      	case "=":
			equally();
        break;

      	case "+":
			add();
        break;

      	case "-":
			sub();
        break;

      	case "×":
			mult();
        break;

      	case ".":
        	if (!screen.includes(".")) {
          		point();
        	}
        break;
		
			default:
				screen === "0" && screen.length < 10
					? setScreen(e.target.value)
					: setScreen(screen + e.target.value);
		}
	};

	window.addEventListener('keyup', function(e) {
		if (e.key === "Backspace" ) {
			backspace();
		}
		else if (e.key === "+" ) {
			add();
		}
		else if (e.key === "-" ) {
			sub();
		}
		else if (e.key === "*" ) {
			mult();
		}
		else if (e.key === "/") {
			div();
		}
		else if (e.key === '=' || e.key === 'Enter') {
			equally();
		}
		else if (e.key === "Delete") {
			ac();
		}
		else if (e.keyCode === 16) {
			setScreen(screen);
		}
		else if (
			      e.key === "0" || 
		          e.key === "1" || 
				  e.key === "2" || 
				  e.key === "3" || 
				  e.key === "4" || 
				  e.key === "5" || 
				  e.key === "6" || 
				  e.key === "7" || 
				  e.key === "8" || 
				  e.key === "9" 
				) {
			screen === "0" && screen.length < 10
			? setScreen(e.key)
			: setScreen(screen + e.key);
		}
		else if (!screen.includes(".") && (e.key === "." ||  e.key === ",")) {
			point();
	    }
		else if (e.key === "%") {
			percent();
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
