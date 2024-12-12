import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const CalculatorStyles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.background,
        justifyContent: 'center', 
        alignItems: 'center',  
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
      },
      numPadContainer :{
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: Colors.teritary,
        alignItems: 'center',
        
      },
      button: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      button_top: {
        width: 140,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      buttonText: {
        color: 'white', 
        fontSize: 22,
      },
      input: {
        height: 70,  
        width: '90%',  
        textAlign: 'right',
        borderWidth: 1,
        marginBottom: 30,  
        paddingRight: 15,  
        fontSize: 36,  
        borderRadius: 10,  
        backgroundColor: 'white',
      },
      
});

export default CalculatorStyles;