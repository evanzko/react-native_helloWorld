import React, {Component} from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import FIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Container from '../components/Container';
import Label from '../components/Label';
import { StackNavigator } from 'react-navigation';

export default class FancyLogin extends Component {
    render() {
        return(
            <Image source= {require('../images/SeattleSkyline.jpg')} style={styles.backgroundImage}>
                <View style= {styles.backScreen}>
                    <View style = {styles.top}>
                        <FIcon 
                            name = 'cubes'
                            size = {100}
                            style = {styles.logo}
                        />
                    </View>
                    <View style = {styles.email}>
                        <MaterialIcons
                            name = 'email'
                            size = {50}
                            style = {styles.logo}
                        />
                        <TextInput
                            placeholder='E-mail address'
                            placeholderTextColor= 'white'
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType= "email-address"
                            autoCapitalize="none"
                            autoCorrect = {false}
                            onChange = {(user) => this.setState({user})}
                            style={styles.input}
                        />
                    </View>
                    <View style = {styles.pass}>
                        <FIcon 
                            name = 'key'
                            size = {50}
                            style = {styles.logo}
                        />
                        <TextInput
                                placeholder='password'
                                placeholderTextColor= 'white'                       
                                secureTextEntry
                                returnKeyType="go"
                                ref={(input) => this.passwordInput = input}
                                onChange = {(pass) => this.setState({pass})}
                                style={styles.input}                   
                            />
                        </View>
                    <TouchableOpacity  
                        onPress={() => Alert.alert('test message', "just checking haha")}
                        style = {styles.login}>
                       <Text style = {styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,

    },
    backScreen: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.6)',
    },
    input: {
        height: 50,
        width: 250,
        marginBottom: 20,
        color: 'white',
        padding: 10,
        alignSelf: 'center',
        fontFamily: 'Iowan Old Style',
        fontSize: 15,
    },
    email: {
        width: 250,
        height: 50,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#f39c12',
    },
    pass: {
        width: 250,
        height: 50,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#f39c12',
    },
    top: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    logo:{
        color: 'white',
        alignSelf: 'center'
    },
    login: {
        width: 250,
        height: 30,
        backgroundColor: '#95a5a6',
        alignSelf: 'center',
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    }

});