import React, { useState } from "react";
import "./Calculator.scss";
import Button from "../Button/Button";

export default function Calculator() {
    const [total, setTotal] = useState();
	const [screen, setScreen] = useState("0");
	const [operation, setOperation] = useState("");

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

  	const handleInput = (event) => {
		switch (event.target.value) {

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
					? setScreen(event.target.value)
					: setScreen(screen + event.target.value);
		}
	};

    function onKeyDown () {
   		window.addEventListener('keyup', function(event) {
			if (event.key === "Backspace" ) {
				backspace();
			}
			else if (event.key === "+" ) {
				add();
			}
			else if (event.key === "-" ) {
				sub();
			}
			else if (event.key === "*" ) {
				mult();
			}
			else if (event.key === "/") {
				div();
			}
			else if (event.key === '=' || event.key === 'Enter') {
				equally();
			}
			else if (event.key === "Delete") {
				ac();
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
			else if (!screen.includes(".") && (event.key === "." ||  event.key === ",")) {
				point();
	    	}
			else if (event.key === "%") {
				percent();
	    	}
		}); 
   }

	return (
	<main>
        <div className="calculator" onKeyDown={onKeyDown}>
			<div className="screen-container">
		  	  <span className="screen">{screen}</span>
			</div>
			<div id="buttons" className="button-row">
				<Button 
				  	name="number" 
					onClick={handleInput} 
					value={"AC"} 
				/>
				<Button 
				    name="number" 
					onClick={handleInput} 
					value={"+/-"} 
				/>
				<Button 
				    name="number" 
					onClick={handleInput} 
					value={"%"} 
				/>
          		<Button 
				    name="operation delete"
					onClick={handleInput} 
					value={"backspace"} 
				/>
			</div>
			<div id="buttons" className="button-row">
			    <Button 
				    name="number" 
					onClick={handleInput} 
					value={7} 
			    />
			    <Button 
				    name="number" 
					onClick={handleInput} 
					value={8} 
			    />
			    <Button 
				    name="number" 
					onClick={handleInput} 
					value={9} 
			    />
                <Button 
				    name="operation" 
					onClick={handleInput} 
					value={"÷"} 
			    />						
			</div>
			<div id="buttons" className="button-row">
			    <Button 
				    name="number" 
					onClick={handleInput} 
					value={4} 
			    />
		        <Button 
				    name="number" 
					onClick={handleInput} 
					value={5} 
			    />
			    <Button 
				    name="number" o
					onClick={handleInput} 
					value={6} 
			    />
                <Button 
				    name="operation" 
					onClick={handleInput} 
					value={"×"} 
			    />						
		    </div>
		    <div id="buttons" className="button-row">
			    <Button 
				  	name="number" 
					onClick={handleInput} 
					value={1} 
		        />
			    <Button 
				    name="number" 
					onClick={handleInput} 
					value={2} 
			    />
			    <Button 
				    name="number" 
					onClick={handleInput} 
					value={3} 
			    />
                <Button 
				    name={"operation"} 
					onClick={handleInput} 
					value={"-"} 
			    />
  			</div>
			<div id="buttons" className="button-row">
                <Button 
					name="number" 
					onClick={handleInput} 
					value={"."} 
				/>
	 			<Button 
					name="number" 
					onClick={handleInput} 
					value={"0"} 
				/>
		  		<Button 
					name="number" 
					onClick={handleInput} 
					value={"="}
				/>
                <Button 
					name="operation" 
					onClick={handleInput} 
					value={"+"} 
				/>
			</div>
      </div>
	</main>
	);
}
