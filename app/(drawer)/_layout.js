import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";



export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "coral", width: 245 },
          drawerLabelStyle: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          },
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true
        }}
      >
        <Drawer.Screen 
          name="calc" 
          options={{
            drawerLabel: "Calculator",
            title: "Calculator",
          }}
        />
                <Drawer.Screen 
          name="unit_conv"
          options={{
            drawerLabel: "Unit Converter",
            title: "Unit Converter",
          }}
        />
        <Drawer.Screen 
          name="graph" 
          options={{
            drawerLabel: "Graph",
            title: "Graph",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
