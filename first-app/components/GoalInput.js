import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import { HitTestResultTypes } from 'expo/build/AR';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType='slide'>  
      <View style={styles.inputContainer}>
        <TextInput placeholder='Please enter your goal here' style={styles.text} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button style={styles.button} title='Add' onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>  
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      flex: 1
    },
    text: {width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
    },
    button: {
      width: 10,
      margin: 10
    }
});

export default GoalInput;