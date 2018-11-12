import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default class ZipDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your zipcode: </Text>
        <TextInput
          style={styles.text_input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: 'red',
    borderWidth: 1
  },
  text_input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    width: 100,
    height: 35
  }
});