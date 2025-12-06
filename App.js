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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProjectsCard from './ProjectCard';

export default function App() {
  const name = 'Shahriar Ahamed';
  const onContactMe = () => {
    console.warn('Contact me clicked');
  };

  const links = {
    github: 'https://github.com/shahriarahamed',
    twitter: 'https://twitter.com/shahriarahamed',
    facebook: 'https://facebook.com/shahriarahamed',
  };

  const getOcupation = () => {
    return 'Software Engineer';
  };

  const renderSocialIcon = () => {
    return (
      <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
        {links.github && <AntDesign name='github' size={24} color='black' />}
        {links.twitter && <AntDesign name='twitter' size={24} color='black' />}
        {links.facebook && (
          <AntDesign name='facebook' size={24} color='black' />
        )}
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
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
              {name}
            </Text>
            <Text>{getOcupation()}</Text>
            {renderSocialIcon()}

            <Button title='Contact Me' onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 20, lineHeight: 20 }}>
              Life often feels like a long, winding road filled with unexpected
              turns, small surprises, and moments that stay with us far longer
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ padding: 10, gap: 10 }}
            >
              <ProjectsCard
                name='Project 1'
                image={require('./assets/projects/project1.jpeg')}
              />
              <ProjectsCard
                name='Project 2'
                image={require('./assets/projects/project2.jpeg')}
              />
              <ProjectsCard
                name='Project 3'
                image={require('./assets/projects/project3.jpeg')}
              />
              <ProjectsCard
                name='Project 4'
                image={require('./assets/projects/project4.jpeg')}
              />
            </ScrollView>

            <StatusBar style='light' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
