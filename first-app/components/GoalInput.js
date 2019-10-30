import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Please enter your goal here' style={styles.text} onChangeText={goalInputHandler} value={enteredGoal} />
      <Button title='Add' onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;