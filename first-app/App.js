import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Please enter your goal here' style={styles.text} />
        <Button title='Add' />
      </View>

      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  text: {width: '80%', 
  borderColor: 'black', 
  borderWidth: 1, 
  padding: 10
  }
});