import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

var productArray = [];
export default class Fetch extends Component {
  constructor(props) {
      super(props);
      var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = ({
        dataSource: dataSource.cloneWithRows(productArray),
        isLoading: true
      });
  }

  static navigationOptions = {
    title: 'Info',
  }

  getItems(callback) {
    fetch('https://demo.cashvue.com/api/v1.0/login', {
      method: 'POST',
      body: JSON.stringify(
        {email: "demo@cashvue.com", password: "demo1234"}
      )
    })
      .then((response) => response.json())
      .then((json) => callback(json))    
      .catch((error) => {
        console.error(error);
      })
  }

  componentDidMount(){
    this.getItems(function(json){
      productArray = json;
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(productArray),
          isLoading: false,
      });
    }.bind(this));
  }
  renderRow(rowData, sectionID, rowID) {
    return (
        <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
          <View>
            <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.display_string}</Text>
            <View style={{height: 1, backgroundColor: '#dddddd'}}/>
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    var currentView = (this.state.isLoading)?<View/>:<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/> 

    return(
      <View>
        {currentView}
      </View>   
    );
  }
}