import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import CalculatorStyles from "../../styles/CalculatorStyles";

export default function App() {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const calculatePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const calculateSquareRoot = () => {
    try {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const toggleSign = () => {
    try {
      setInput((parseFloat(input) * -1).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput(input + ".");
    }
  };

  return (
    <View style={CalculatorStyles.container}>
      {/* <Text style={styles.title}>Calculator</Text> */}
      <TextInput
        style={CalculatorStyles.input}
        value={input}
        editable={false}
      />
      <View style={CalculatorStyles.buttonRow}>
        <TouchableOpacity style={CalculatorStyles.button} onPress={clearInput}>
          <Text style={CalculatorStyles.buttonText}>AC</Text>
        </TouchableOpacity>
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
