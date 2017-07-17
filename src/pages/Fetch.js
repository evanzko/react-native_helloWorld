import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Fetch extends Component {
  constructor(props) {
      super(props);
      this.state = ({
        dataSource: []
      });
      console.log("Before ", this.state.dataSource);
  }

  static navigationOptions = {
    title: 'Info',
  }

  getItems= () => {
    return fetch('https://demo.cashvue.com/api/v1.0/login', {
      method: 'POST',
      body: JSON.stringify(
        {email: "demo@cashvue.com", password: "demo1234"}
      )
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.user);
        let d2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState = ({
          dataSource : d2.cloneWithRows(responseJson.user),
        });

        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    this.getItems();
    console.log("After ", this.state.dataSource);
    return (
      <View>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
      </View>

    );
  }
}