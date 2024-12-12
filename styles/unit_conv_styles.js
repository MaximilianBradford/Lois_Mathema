import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const UnitConvStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
    buttonText: {
        fontSize: 15,
        color: 'white',
    },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default UnitConvStyles;