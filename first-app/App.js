import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHnadler = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Please enter your goal here' style={styles.text} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title='Add' onPress={addGoalHnadler} />
      </View>

      <View>
        {goals.map((goal) => <Text key={goal}>{goal}</Text>
        )}
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