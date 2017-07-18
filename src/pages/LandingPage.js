import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LandingPage extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate('FancyLogin')
        },3000);
    }

    componentWillMount() {
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return(
            <Image source={require('../images/splash.jpg')} style={styles.splash} />
        );
    }
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        alignSelf: 'center',
    }
});