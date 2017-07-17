import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Container from '../components/Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inline: {
    flexDirection: 'row',
  },
  menu: {
    justifyContent: 'flex-start',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#2980b9'
  }
});

const App = (props)  => {
  const { navigate } = props.navigation;

  return (
    <ScrollView style= {styles.scroll}>
      <Container>
        <TouchableHighlight
          onPress = {() => navigate('DrawerOpen')}
        >
          <View style={styles.inline}>
            <Icon name="menu" size={50} />
          </View>
        </TouchableHighlight>
      </Container>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Happy.inc! We value our customers and would love to hear from you! 
        </Text>
        <Text>
          Click the login button to log into our site
        </Text>
        <Button
            onPress={() => navigate('Login')}
            title="Login"
        />
        <Button
          onPress={() => navigate('Info')}
          title="Info"
        />

          
      </View>
    </ScrollView>
  );
}


export default App
