'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

var KeypadView = React.createClass({
  render: function() {
    if (!this.props.show) {
      return <View/>;
    }
    return (
      <View style={styles.keypad}>
        <View style={styles.buttonRow}>
          <ButtonView text='1' onPress={this.handlePress.bind(this, 1)}/>
          <ButtonView text='2' onPress={this.handlePress.bind(this, 2)}/>
          <ButtonView text='3' onPress={this.handlePress.bind(this, 3)}/>
        </View>
        <View style={styles.buttonRow}>
          <ButtonView text='4' onPress={this.handlePress.bind(this, 4)}/>
          <ButtonView text='5' onPress={this.handlePress.bind(this, 5)}/>
          <ButtonView text='6' onPress={this.handlePress.bind(this, 6)}/>
        </View>
        <View style={styles.buttonRow}>
          <ButtonView text='7' onPress={this.handlePress.bind(this, 7)}/>
          <ButtonView text='8' onPress={this.handlePress.bind(this, 8)}/>
          <ButtonView text='9' onPress={this.handlePress.bind(this, 9)}/>
        </View>
        <View style={styles.buttonRow}>
          <ButtonView text='<' special='true' onPress={this.handlePress.bind(this, 'bsp')}/>
          <ButtonView text='0' onPress={this.handlePress.bind(this, 0)}/>
          <ButtonView text='>' special='true' onPress={this.handlePress.bind(this, 'next')}/>
        </View>
      </View>
    );
  },

  handlePress: function(key) {
    if (key === 'next') {
      this.props.onNextClicked();
      return;
    }
    var num = this.props.num;
    if (!isNaN(key)) {
      num = num*10 + key*0.01;
    } else if (key === 'bsp') {
      num = Math.floor(num*10)/100;
    }
    this.props.onUserInput(num);
  }
});

var ButtonView = React.createClass({
  render: function() {
    if (this.props.special) {
      return (
        <TouchableHighlight style={styles.buttonSpecial} underlayColor='#777' onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight style={styles.button} underlayColor='#777' onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableHighlight>
      );  
    }
  }
});

var styles = StyleSheet.create({
  keypad: {
    flex: 1
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'stretch'
  },
  button: {
    backgroundColor: '#aaa',
    flex: 1,
    padding: 30,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  buttonSpecial: {
    backgroundColor: '#aaa',
    flex: 1,
    padding: 30,
    borderWidth: 1,
    borderColor: '#FFF' 
  },
  buttonText: {
    fontSize: 30,  
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

module.exports = KeypadView;