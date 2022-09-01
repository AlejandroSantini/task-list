import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: '#4a306d',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput selectionColor='#4a306d' placeholderTextColor='#4a306d' style={styles.input} placeholder='new task' onPress={() => console.warn('hola')} />
        <Button title='Add' />
      </View>
    </View>
  );
}