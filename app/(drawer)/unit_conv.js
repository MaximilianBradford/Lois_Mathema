import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UnitConv = () => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [conversionType, setConversionType] = useState('CtoF');

  const handleConvert = () => {
    let result;
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setConvertedValue('Invalid Input');
      return;
    }

    if (conversionType === 'CtoF') {
      result = (value * 9) / 5 + 32; // Celsius to Fahrenheit
    } else if (conversionType === 'FtoC') {
      result = ((value - 32) * 5) / 9; // Fahrenheit to Celsius
    }

    setConvertedValue(result.toFixed(2)); // Format result to 2 decimals
  };

  const handleClear = () => {
    setInputValue('');
    setConvertedValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unit Converter</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        placeholder="Enter value"
      />
      <View style={styles.buttonRow}>
        <Button title="Celsius to Fahrenheit" onPress={() => setConversionType('CtoF')} />
        <Button title="Fahrenheit to Celsius" onPress={() => setConversionType('FtoC')} />
      </View>
      <Button title="Convert" onPress={handleConvert} />
      <Text style={styles.result}>Result: {convertedValue}</Text>
      <Button title="Clear" onPress={handleClear} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default UnitConv;
