import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]); 

  const addGoalHnadler = (goalTitle) => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHnadler} />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id} 
          data={goals} 
          renderItem={itemData => (
            <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}/>  
          )} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});