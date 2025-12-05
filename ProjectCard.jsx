const ProjectsCard = ({ name, image }) => {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 10,
          color: 'dimgray',
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ProjectsCard;
