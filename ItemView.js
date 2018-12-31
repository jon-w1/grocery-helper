'use strict';

var React = require('react-native');
var KeypadView = require('./KeypadView');
var SearchView = require('./SearchView');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

var ItemView = React.createClass({
  getInitialState: function() {
    var item = this.props.item;
    return {
      screen: 1,
      name: item.name || 'Choose an item',
      unitPrice: item.unitPrice || item.price || 0,
      priceType: item.priceType || 'Each item',
      amount: item.amount || 1,
      price: item.price || 0
    };
  },

  render: function() {
    var price = this.state.price.toFixed(2);
    var unitPrice = this.state.unitPrice.toFixed(2);
    return (
      <View style={styles.container}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalNumText}>${price}</Text>
        </View>
        <KeypadView show={this.state.screen == 0}
          onUserInput={this.handleKeypadInput} 
          onNextClicked={this.handleNextClicked}
          num={this.state.price}/>
        {this.state.screen == 1 ? <View style={styles.bottomSection}>
          <TouchableHighlight underlayColor="#eee" onPress={this.openNameSearch}>
            <View style={styles.selectRow}>
              <Text style={styles.selectTitle}>Item:</Text>
              <Text style={styles.selectValue}>{this.state.name}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#eee">
            <View style={styles.selectRow}>
              <Text style={styles.selectTitle}>Item price:</Text>
              <Text style={styles.selectValue}>${unitPrice}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#eee">
            <View style={styles.selectRow}>
              <Text style={styles.selectTitle}>Price per:</Text>
              <Text style={styles.selectValue}>{this.state.priceType}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#eee">
            <View style={styles.selectRow}>
              <Text style={styles.selectTitle}>Amount:</Text>
              <Text style={styles.selectValue}>{this.state.amount}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor='#aaa' style={styles.button}>
              <Text style={styles.buttonText}>Save Item</Text>
          </TouchableHighlight>
        </View> : null }
      </View>
    );
  },

  // User interaction methods
  handleKeypadInput: function(newValue) {
    this.setState({
      price: newValue,
      unitPrice: newValue
    });
  },
  handleNextClicked: function() {
    this.setState({
      screen: 1
    });
  },
  openNameSearch: function() {
    this.props.navigator.push({
      title: "Item",
      component: SearchView,
      passProps: {updateItemName: this.updateItemName}
    });
  },

  // Model Updating methods
  updateItemName: function(name) {
    this.setState({
      name: name
    });
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {  
    flex: 1,
    marginTop: 64,
  },
  totalContainer: {
    flexDirection: 'row',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 30
  },
  totalNumText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#48BBEC',
    textAlign: 'right',
    flex: 1
  },
  bottomSection: {
    flex: 1
  },
  selectRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  selectTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1
  },
  selectValue: {
    fontSize: 16,
    textAlign: 'right',
    color: '#666',
    flex: 1
  },
  button: {
    margin: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#48BBEC',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});

module.exports = ItemView;