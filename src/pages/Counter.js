import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import { observer, inject } from "mobx-react";

@inject("counterStore")
@observer
class Counter extends Component {
  render() {
    return <Text>Count: {this.props.counterStore.count}</Text>;
  }
}