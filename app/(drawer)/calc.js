import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import CalculatorStyles from "../../styles/CalculatorStyles";

export default function App() {
  const [input, setInput] = useState("");
  const [inputhistory, setInputHistory] = useState([]);

  const historyData = (answer) => {
    //console.log(expression)
    const equation = input + ' = ' + answer;
    if (inputhistory.length >= 3) {
      console.log(equation)
      const newHistory = [...inputhistory.slice(1), equation];
      setInputHistory(newHistory);
    } else {
      //const equation = input + ' = ' + eval(expression).toString()
      console.log(equation)
      setInputHistory([...inputhistory, equation]);
    }
  };

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleParenthesis = () => {
    const openParentheses = (input.match(/\(/g) || []).length;
    const closeParentheses = (input.match(/\)/g) || []).length;
    if (openParentheses > closeParentheses) {
      setInput(input + ')');
    } else {
      setInput(input + '(');
    }
  };

  const calculateResult = () => {
    try {
      let expression = input.replace(/√(\d+)/g, '(Math.sqrt($1))');
      expression = expression.replace(/(\d+)%/g, '($1/100)');
      console.log(expression);
      const result = eval(expression).toString();
      if (result.length > 10) {
        const number_alt = parseFloat(result);
        setInput(number_alt.toFixed(10).toString());
        historyData(number_alt.toFixed(10).toString());
      } else {
        setInput(result.toString());
        historyData(result.toString());
      }
      //historyData(result);
    } catch (error) {
      setInput("Error");
      console.log(error);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const calculatePercentage = () => {
    setInput(input + '%');
  };

  const calculateSquareRoot = () => {
    setInput(input + '√');
  };

  const toggleSign = () => {
    if (input === '') {
      return;
    }
    try {
      const parts = input.split(/([+\–*/√%])/);
      let lastPart = parts.pop();
      if (lastPart.startsWith('-')) {
        lastPart = lastPart.substring(1);
      } else {
        lastPart = '-' + lastPart;
      }
      setInput(parts.join('') + lastPart);
    } catch (error) {
      setInput("Error");
    }
  };

  const handleDecimal = () => {
    const parts = input.split(/[\+\-\*\/]/); 
    const lastPart = parts[parts.length - 1]; 
    if (!lastPart.includes(".")) {
      setInput(input + ".");
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <View style={CalculatorStyles.container}>
        <View style = {CalculatorStyles.mainScreen}>  
          <View style={CalculatorStyles.historyContainer}>
            {/* <Text style={CalculatorStyles.historyTitle}>History</Text> */}
            {inputhistory.map((item, index) => (
              <Text key={index} style={CalculatorStyles.historyText}> 
                {item}
              </Text>
            ))} 
            
          </View>
          <TextInput
            style={CalculatorStyles.input}
            value={input}
            editable={false}
          />
        </View>
      
      <View style={CalculatorStyles.buttonRow}>
      <TouchableOpacity style={CalculatorStyles.button_top} onPress={clearInput}>
          <Text style={CalculatorStyles.buttonText}>AC</Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={CalculatorStyles.button_top}
          onPress={handleDelete}
        >
          <Text style={CalculatorStyles.buttonText}>⌫</Text>
        </TouchableOpacity>
        
      </View>

      <View style={CalculatorStyles.buttonRow}>
        
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={calculatePercentage}
        >
          <Text style={CalculatorStyles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={calculateSquareRoot}
        >
          <Text style={CalculatorStyles.buttonText}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CalculatorStyles.button} onPress={toggleSign}>
          <Text style={CalculatorStyles.buttonText}>±</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={handleParenthesis}
        >
          <Text style={CalculatorStyles.buttonText}>( )</Text>
        </TouchableOpacity>
        
      </View>

      <View style={CalculatorStyles.buttonRow}>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("7")}
        >
          <Text style={CalculatorStyles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("8")}
        >
          <Text style={CalculatorStyles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("9")}
        >
          <Text style={CalculatorStyles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("*")}
        >
          <Text style={CalculatorStyles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={CalculatorStyles.buttonRow}>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("4")}
        >
          <Text style={CalculatorStyles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("5")}
        >
          <Text style={CalculatorStyles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("6")}
        >
          <Text style={CalculatorStyles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("-")}
        >
          <Text style={CalculatorStyles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={CalculatorStyles.buttonRow}>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("1")}
        >
          <Text style={CalculatorStyles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("2")}
        >
          <Text style={CalculatorStyles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("3")}
        >
          <Text style={CalculatorStyles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("+")}
        >
          <Text style={CalculatorStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={CalculatorStyles.buttonRow}>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={handleDecimal}
        >
          <Text style={CalculatorStyles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("0")}
        >
          <Text style={CalculatorStyles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={calculateResult}
        >
          <Text style={CalculatorStyles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.button}
          onPress={() => handlePress("/")}
        >
          <Text style={CalculatorStyles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
