import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const API_BASE_URL = "https://www.desmos.com/api/v1.0/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";

const Graph = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API_BASE_URL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error making the request!", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <WebView
          originWhitelist={['*']}
          source={{ html: `
            <!DOCTYPE html>
            <html>
              <head>
                <script src="https://www.desmos.com/api/v1.0/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
              </head>
              <body>
                <div id="calculator" style="width: 100%; height: 100%;"></div>
                <script>
                  var elt = document.getElementById('calculator');
                  var calculator = Desmos.GraphingCalculator(elt);
                </script>
              </body>
            </html>
          ` }}
          style={styles.webview}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Graph;