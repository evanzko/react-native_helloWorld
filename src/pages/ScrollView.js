import React, {Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class CustomApp extends Component {

  componentDidMount() {
    let scrollValue = 0;
    setInterval(function(){
      scrollValue = scrollValue + width;   // width = screen width 
      _scrollView.scrollTo({x: scrollValue}) 
    }, 3000);
  }
  render() {
    return (
     <View>
       <ScrollView 
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true} pagingEnabled={true} 
        >
          <Image source={require('../images/SeattleSkyline.jpg')} style={{height, width}} />
          <Image source={require('../images/smiles.jpg')} style={{height, width}} />
       </ScrollView>
       <View style={{ position: 'absolute'}}>
         <Text>Page Content</Text>
      </View>
     </View>
    );
  }
}