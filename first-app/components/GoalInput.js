import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import { HitTestResultTypes } from 'expo/build/AR';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>  
      <View style={styles.inputContainer}>
        <TextInput placeholder='Please enter your goal here' style={styles.text} onChangeText={goalInputHandler} value={enteredGoal} />
        <View style={styles.button}>
          <Button title='Cancel' color='red' onPress={props.onCancel} />  
          <Button title='Add' onPress={addGoalHandler} />
        </View>
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
    text: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    },
    button: {
      width: 200,
      margin: 10,
      justifyContent: 'center',
      alignContent:'center'
    }
});

export default GoalInput;