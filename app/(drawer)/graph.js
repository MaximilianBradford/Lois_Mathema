import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Graph = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Graph</title>
        <script src="https://www.desmos.com/api/v1.0/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
        <style>
            body, html, #calculator {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        </style>
    </head>
    <body>
        <div id="calculator"></div>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var elt = document.getElementById('calculator');
                var calculator = Desmos.GraphingCalculator(elt);
                calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
            });
        </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Graph;