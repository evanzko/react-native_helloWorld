import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, ScrollView,StyleSheet,Text,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class ForgotPass extends Component {
    constructor(props) {
        super(props);
        this.state = {email: ''};
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <Container style = {styles.text}>
                    <Text>For your password?</Text>
                    <Text>Enter the email address for your account and we'll email you a link to reset your password</Text>
                </Container>
                <Container>
                    <TextInput
                            placeholder='Email'
                            returnKeyType="next"
                            keyboardType= "email-address"
                            autoCapitalize="none"
                            autoCorrect = {false}
                            onChange = {(user) => this.setState({email})}
                            style={styles.input}
                    />
                </Container>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: '#bdc3c7',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    scroll: {
        flex:1,
        backgroundColor: '#2980b9'
    },
    text: {
        fontSize: 30
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