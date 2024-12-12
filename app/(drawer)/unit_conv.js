import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import UnitConvStyles from '../../styles/unit_conv_styles';

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

    switch (conversionType) {
      case 'CtoF':
        result = (value * 9) / 5 + 32; // Celsius to Fahrenheit
        break;
      case 'FtoC':
        result = ((value - 32) * 5) / 9; // Fahrenheit to Celsius
        break;
      case 'MtoF':
        result = value * 3.28084; // Meters to Feet
        break;
      case 'FtoM':
        result = value / 3.28084; // Feet to Meters
        break;
      case 'KtoP':
        result = value * 2.20462; // Kilograms to Pounds
        break;
      case 'PtoK':
        result = value / 2.20462; // Pounds to Kilograms
        break;
      default:
        result = 'Invalid Conversion Type';
    }

    setConvertedValue(result.toFixed(2)); // Format result to 2 decimals
  };

  const handleClear = () => {
    setInputValue('');
    setConvertedValue('');
  };

  return (
    <View style={UnitConvStyles.container}>
      <TextInput
        style={UnitConvStyles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter value"
        keyboardType="numeric"
      />
      <Picker
        selectedValue={conversionType}
        style={UnitConvStyles.picker}
        onValueChange={(itemValue) => setConversionType(itemValue)}
      >
        <Picker.Item label="Celsius to Fahrenheit" value="CtoF" />
        <Picker.Item label="Fahrenheit to Celsius" value="FtoC" />
        <Picker.Item label="Meters to Feet" value="MtoF" />
        <Picker.Item label="Feet to Meters" value="FtoM" />
        <Picker.Item label="Kilograms to Pounds" value="KtoP" />
        <Picker.Item label="Pounds to Kilograms" value="PtoK" />
      </Picker>
      <TouchableOpacity onPress={handleConvert} style={UnitConvStyles.button}>
        <Text style={UnitConvStyles.buttonText}>Convert</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClear} style={UnitConvStyles.button}>
        <Text style={UnitConvStyles.buttonText}>Clear</Text>
      </TouchableOpacity>
      <Text style={UnitConvStyles.result}>{convertedValue}</Text>
    </View>
  );
};

export default UnitConv;