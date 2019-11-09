import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return(
    <View style={styles.screen}>
        <Text> You got the right number! </Text>
        <Text> Number of Guesses: {props.roundsNum} </Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button title='New Game' onPress={props.onRestart} />
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;