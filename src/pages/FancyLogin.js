import React, {Component} from 'react';

import {
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
  Dimensions,
  Alert,
  StatusBar,
} from 'react-native';

import FIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Container from '../components/Container';
import Label from '../components/Label';
import Store from '../store/LoginStore';

import { StackNavigator } from 'react-navigation';
import {observer} from 'mobx-react/native';

const{ width, height } = Dimensions.get('window');

var timerId = null;

@observer
export default class FancyLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: ''
        }
    }

    componentDidMount() { //method for changing the background image of the app
        let scrollValue = 0;
        let counter = 0;
        timerId = setInterval(function(){
            //if the counter equals 2 ( the number of pictures loaded onto the app)
            //set the scrollValue back to the 0 so it can start at the first image again
            if(counter == 2){
                scrollValue = 0;
                counter = 0;
            }else{
                counter += 1; //increment counter
                scrollValue = scrollValue + width;   // width = screen width 
            }
            _scrollView.scrollTo({x: scrollValue})  //scroll to the next image
        }, 5000);
    }

    navigateFunction(){
        clearInterval(timerId); //stop the picture sliding effect. Ran into an error when moving to 
        //another screen if this isn't here
        console.log("THe timer id is cleared")
        Store.setCred(["demo@cashvue.com","demo1234"]) //set the fields in the store
        this.reset() //reset the credentials after setting for security? I think I need to do it. 
        this.props.navigation.navigate('Info') //navigate to the screen for information
    }

    forgotFunction() {
        clearInterval(timerId); //stop the picture sliding effect. Ran into an error when moving to 
        //another screen if this isn't here
        this.props.navigation.navigate('ForgotPass')
    }

    reset(){
        this.setState({user: '', pass: ''})
    }
    render() {
        return(
            <View>
                <ScrollView 
                ref={(scrollView) => { _scrollView = scrollView; }}
                horizontal={true} pagingEnabled={true} scrollEnabled={false} 
                //scroll settings, scroll horizontal and move by page
                //made the screen locked so no scrolling by the user
                >
                    <Image source={require('../images/SeattleSkyline.jpg')} style={{height, width}} />
                    <Image source={require('../images/wheel.jpg')} style={{height, width}} />
                    <Image source={require('../images/splash.jpg')} style={{height, width}} /> 
                </ScrollView>
                <View style= {styles.backScreen}>
                    <View style = {styles.top}>
                        <FIcon 
                            name = 'cubes'
                            size = {100}
                            style = {styles.logo}
                        />
                    </View>
                    <Text style= {styles.forgot} onPress={this.forgotFunction.bind(this)}>Forgot Password?</Text>
                    <KeyboardAvoidingView style={styles.container} behavior = "padding" keyboardVerticalOffset={35}>
                        <View style = {styles.inputBar}>
                            <MaterialIcons
                                name = 'email'
                                size = {40}
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
                        <View style = {styles.inputBar}>
                            <FIcon 
                                name = 'key'
                                size = {40}
                                style = {styles.logo}
                            />
                            <TextInput
                                    placeholder='password'
                                    placeholderTextColor= 'white'                       
                                    secureTextEntry
                                    returnKeyType="go"
                                    ref={(input) => this.passwordInput = input}
                                    onChange = {(pass) => this.setState({pass})}
                                    onSubmitEditing={() => this.navigateFunction.bind(this)}
                                    style={styles.input}                   
                                />
                            </View>
                    </KeyboardAvoidingView>        
                    <TouchableOpacity  
                        onPress={this.navigateFunction.bind(this)}
                        style = {styles.login}>
                        <Text style = {styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    topLeft:{
        alignSelf: 'flex-start',
    },
    backScreen: { //style for the backscreen that lays on top of the images
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.6)',
        position: 'absolute',
        height: (height-StatusBar.currentHeight),
        width: width,
        paddingBottom: 20,
    },
    top: { //style for the logo
        flex: 1,
        alignSelf: 'center',
        paddingTop: 30,
    },
    input: { //style for the input text of the fields
        height: 50,
        width: 250,
        marginBottom: 20,
        color: 'white',
        padding: 10,
        alignSelf: 'center',
        fontFamily: 'Iowan Old Style',
        fontSize: 15,
    },
    inputBar: { //style for the containers that hold the textInputs
        width: 250,
        height: 50,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#f39c12',
        opacity: 0.8
    },
    logo:{ //style for the logo's in the input field
        color: 'white',
        alignSelf: 'center'
    },
    login: { //style for the login button
        width: 250,
        height: 30,
        backgroundColor: '#95a5a6',
        alignSelf: 'center',
        borderRadius: 30,
        marginVertical: 10
    },
    text: { //style for the text in the button's, such as login and forgot password
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    forgot: {
        fontSize: 10,
        color: 'white',
        alignSelf: 'flex-end',
        paddingRight: 50,
    },
});