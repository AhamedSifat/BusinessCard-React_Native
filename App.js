import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const onContactMe = () => {
    console.warn('Contact me clicked');
  };

  return (
    <ScrollView>
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
          source={require('./assets/sifat.jpg')}
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
        <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
          <AntDesign name='github' size={24} color='black' />
          <AntDesign name='twitter' size={24} color='black' />
          <AntDesign name='facebook' size={24} color='black' />
        </View>

        <Button title='Contact Me' onPress={onContactMe} />

        <Text style={{ padding: 10, fontSize: 20, lineHeight: 20 }}>
          Life often feels like a long, winding road filled with unexpected
          turns, small surprises, and moments that stay with us far longer than
          we expect. Some days move slowly, as if time itself is stretching just
          to see how patient we can be; other days pass so quickly that we
          barely get the chance to breathe. In between these moments, we learn
          more about ourselves—what we want, what we fear, and what we dream
          about when no one else is watching. People we meet along the way shape
          us in ways we don’t always notice. A simple conversation, a kind
          smile, or even a short message at the right time can turn an ordinary
          moment into something meaningful. We carry these memories like soft
          lanterns, guiding us when everything feels dark or confusing. And even
          though life doesn’t always go the way we plan, there is something
          beautiful in the uncertainty. It teaches us to grow, to adapt, and to
          hope. Every morning becomes a new chance to understand the world a
          little better and to understand ourselves a little more deeply. In the
          end, it’s these small, ordinary moments that create the story we call
          our life.
        </Text>

        <StatusBar style='auto' />
      </View>
    </ScrollView>
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
