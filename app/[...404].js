// app/[...404].js
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>Oops!</Text>
      <Text style={{ fontSize: 18, color: 'gray', marginBottom: 20 }}>This page doesn't exist.</Text>
      <Link href="/" style={{ paddingVertical: 15, paddingHorizontal: 25, backgroundColor: 'coral', borderRadius: 5 }}>
        <Text style={{ fontSize: 16, color: 'white' }}>Go back home</Text>
      </Link>
    </View>
  );
}