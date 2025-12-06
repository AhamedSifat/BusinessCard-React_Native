import { StyleSheet, View, Image, Text } from 'react-native';

const ProjectsCard = ({ name, image }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ProjectsCard;

const styles = StyleSheet.create({
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    color: 'dimgray',
  },
});
