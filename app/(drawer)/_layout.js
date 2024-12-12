import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from '../../styles/colors';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: Colors.background, width: 245 },
          drawerLabelStyle: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          },
          drawerItemStyle: {
            backgroundColor: Colors.secondary, 
            marginVertical: 5, 
          },
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
        }}
      >
        <Drawer.Screen 
          name="calc" 
          options={{
            drawerLabel: "Calculator",
            title: "Calculator"
          }}
        />
        <Drawer.Screen 
          name="unit_conv"
          options={{
            drawerLabel: "Unit Converter",
            title: "Unit Converter"
          }}
        />
        <Drawer.Screen 
          name="graph" 
          options={{
            drawerLabel: "Graph",
            title: "Graph"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
