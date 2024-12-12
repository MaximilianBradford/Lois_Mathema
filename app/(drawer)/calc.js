import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

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
      let expression = input.replace(/√(\d+)/g, 'Math.sqrt($1)');
      expression = expression.replace(/(\d+)%/g, '($1/100)');
      setInput(eval(expression).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
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
      // Split the input into parts based on operators
      const parts = input.split(/([+\–*/√%])/);
      // Identify the last number
      let lastPart = parts.pop();
      if (lastPart.startsWith('-')) {
        // If the last part is already negative, remove the negative sign
        lastPart = lastPart.substring(1);
      } else {
        // Otherwise, add a negative sign
        lastPart = '-' + lastPart;
      }
      // Reconstruct the input string with the toggled number
      setInput(parts.join('') + lastPart);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
      />
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="+" onPress={() => handlePress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="-" onPress={() => handlePress('–')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="C" onPress={clearInput} />
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="=" onPress={calculateResult} />
        <Button title="/" onPress={() => handlePress('/')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="%" onPress={calculatePercentage} />
        <Button title="√" onPress={calculateSquareRoot} />
        <Button title="±" onPress={toggleSign} />
        <Button title="." onPress={handleDecimal} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="()" onPress={handleParenthesis} />
        <Button title="⌫" onPress={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    textAlign: 'right',
    borderWidth: 1,
    marginBottom: 20,
    paddingRight: 10,
    fontSize: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
