import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]); 
  const [isAddMode, setIsAddMode] = useState(false);

  console.log('updated goals', goals);

  const addGoalHnadler = (goalTitle) => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelAddGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHnadler} onCancel={cancelAddGoal} />
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