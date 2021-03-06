import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number entered', 'Please enter a number between 1 and 99', [{text:'Okay', style:'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setselectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>Chosen Number</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title='Start Game' onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>'Start the Game!'</Text>    
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input value={enteredValue} style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLenth={2} onChangeText={numberInputHandler} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' onPress={resetInputHandler} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}           
            </View> 
        </TouchableWithoutFeedback>
   
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 100,
    },
    input: {
        width: 100,
        borderBottomColor: 'black'
    },
    summaryContainer: {
        marginVertical: 10,
        width: '80%',
        alignItems: 'center' 
    }
});

export default StartGameScreen;