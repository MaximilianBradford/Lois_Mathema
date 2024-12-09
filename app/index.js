import React from 'react';
import { Redirect } from 'expo-router';
import 'react-native-gesture-handler';


export default function Home() {
  return <Redirect href="/(drawer)/calc" />;
}