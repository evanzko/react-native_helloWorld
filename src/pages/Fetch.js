import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Fetch extends Component {
  constructor(props) {
      super(props);
      this.state = ({
        isLoading: true
      });
  }

  static navigationOptions = {
    title: 'Info',
  }




  componentDidMount(){
    return fetch('https://demo.cashvue.com/api/v1.0/login',{
      method: 'POST',
      body: JSON.stringify(
        {email: "demo@cashvue.com", password: "demo1234"}
      )
      })
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.user),
          token: responseJson.token,
          user: responseJson.user,
          roles: responseJson.user.roles,
        });
      })
      .catch((error) => {
        console.error(error);
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
        <Text>This is a page displaying user infomation that is mainly just for debugging</Text>
        <Text>User infomation</Text>
        <Text>Id = {this.state.user.id}</Text>
        <Text>email = {this.state.user.email}</Text>
        <Text>roles_id = {this.state.roles[0].id}</Text>
        <Text>roles_name = {this.state.roles[0].name}</Text>        
      </View>
    );
  }
}