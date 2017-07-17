import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Button from '../components/Button';
import Label from '../components/Label';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', pass: ''};
    }
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder='username or email'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType= "email-address"
                    autoCapitalize="none"
                    autoCorrect = {false}
                    onChange = {(user) => this.setState({user})}
                    style={styles.input}
                />
                <TextInput
                    placeholder='password'
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    onChange = {(pass) => this.setState({pass})}
                    style={styles.input}
                    
                />
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('Fetch')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#bdc3c7',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#bdc3c7',
        padding: 10 
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontWeight: '700'
    }

});