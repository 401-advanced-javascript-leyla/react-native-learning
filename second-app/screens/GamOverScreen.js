import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';

const GameOverScreen = props => {
    return(
    <Card>
        <Text style={styles.text}> You got the right number! </Text>
        <Text style={styles.text}> Number of Guesses: {props.roundsNum} </Text>
        <Text style={styles.text}>Number was: {props.userNumber}</Text>
        <View style={styles.button}><Button title='New Game' onPress={props.onRestart} /></View>
    </Card>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderColor: Colors.primary,
        borderRadius: 10,
        borderWidth: 2
    },
    text: {
        padding: 10,
        color: Colors.primary,
        fontSize: 22
    }
});

export default GameOverScreen;