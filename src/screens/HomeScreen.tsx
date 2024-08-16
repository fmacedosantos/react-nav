import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen({navigation}: any) {

  function navToGallery(){
    navigation.navigate('gallery')
  }
  return (
    <View style={styles.container}>
      <Text>Home works</Text>
      <Button title='Go to Gallery'
      onPress={navToGallery}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
});