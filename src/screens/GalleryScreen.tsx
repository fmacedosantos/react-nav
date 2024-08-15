import { StyleSheet, Text, View } from 'react-native';


export default function GalleryScreen() {
  return (
    <View style={styles.container}>
        <Text>Gallery works</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
});