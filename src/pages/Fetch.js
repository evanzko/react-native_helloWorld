import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Store from '../store/LoginStore';

export default class Fetch extends Component {
  constructor(props) {
      super(props);
      this.state = ({
        isLoading: true
      });
  }

  componentDidMount(){
    Store.getItems();
    this.setState({
      dataSource: Store.getData();
      token: Store.getToken();
      user: Store.getUserInfo();
    })
  }


  render() {
    if(this.state.isLoading) {
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
        <Text>Id = {this.state.user.id}</Text>
        <Text>email = {this.state.user.email}</Text>
        // <Text>roles_id = {this.state.roles[0].id}</Text>
        // <Text>roles_name = {this.state.roles[0].name}</Text>
        <Text>Token = {this.state.token}</Text>        
      </View>
    );
  }
}