import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outpuText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outpuText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('The text is updated!')} />
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
