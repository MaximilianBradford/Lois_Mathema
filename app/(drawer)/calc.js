import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const calculatePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateSquareRoot = () => {
    try {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const toggleSign = () => {
    try {
      setInput((parseFloat(input) * -1).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
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
        <Button title="-" onPress={() => handlePress('-')} />
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
    fontSize: 24,
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
