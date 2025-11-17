import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
        }}
        style={{
          width: '100%',
          aspectRatio: 16 / 9,
        }}
      />
      <Image
        source={require('./assets/vadim.png')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
          borderWidth: 5,
          borderColor: 'white',
          marginTop: -75,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Shahriar Ahamed
      </Text>
      <Text>Founder of Sex.com</Text>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
