import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (<TextInput {...props} Style={{...styles.input, ...props.style}} />);
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderColor: 'black',
        borderBottomWidth: 5,
        marginVertical: 10,
        alignContent: 'center',
        alignItems: 'center'
    }
});

export default Input;