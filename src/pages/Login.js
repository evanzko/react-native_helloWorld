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
  KeyboardAvoidingView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import LoginForm from './LoginForm';
import { StackNavigator } from 'react-navigation';

const Login = (props) => {
  const { navigate } = props.navigation;

  return(
    <KeyboardAvoidingView behavior = "padding" style = {styles.scroll}>
      <View style= {styles.top}>
        <Icon
          name="github-box" size={50}
        />
        <Text style= {styles.title}>This is a login screen for Happy.inc powered by React-Native</Text>
      </View> 
      <Container>
        <Button 
          label="Forgot Login/Pass"
          styles={{button: styles.alignRight, label: styles.label}} 
          onPress={() => navigate('ForgotPass')} />
      </Container>
      <Container>
        <LoginForm />
      </Container>
    
      
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: '#2980b9',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  title:{
    alignSelf: 'center',
    width: 160,
    opacity: 0.9,
    textAlign: 'center',
    color: 'white'
  },
  scroll: {
    backgroundColor: '#2980b9',
    padding: 30,
    flex: 1,
    flexDirection: 'column'//so the dev knows that the app should go vertical
    
  },

  label: {
    color: '#34495e',
    fontSize: 20
  },

  alignRight: {
    alignSelf: 'flex-end'
  }
});

export default Login