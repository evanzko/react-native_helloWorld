import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {observer} from 'mobx-react/native'

import Store from '../store/LoginStore';

@observer
export default class Fetch extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
    Store.getItems();
    
    // console.log(this.state)
  }

  render() {
    if(Store.loading) {
      return(
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View style={{flex: 1, paddingTop: 20}}>
        <Text style={{fontSize: 18}}>Congrats you're now logged in</Text>
        <Text>User infomation</Text>
        <Text>Id = {Store.userInfo.id}</Text>
        <Text>email = {Store.userInfo.email}</Text>
        <Text>Token = {Store.token}</Text>        
      </View>
    );
  }
}