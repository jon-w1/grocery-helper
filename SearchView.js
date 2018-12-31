'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  TextInput,
  Component
} = React;

var SearchView = React.createClass({
  getInitialState: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    });
    var items = [
      {name:'hello'},
      {name:'hello1'},
      {name:'hello2'},
      {name:'hello3'},
      {name:'hello4'},
      {name:'hello5'},
      {name:'hello6'},
      {name:'hello7'},
      {name:'hello8'},
      {name:'hello9'},
      {name:'hello0'},
      {name:'hello-'},
      {name:'helloq'},
      {name:'hellow'},
      {name:'helloe'},
      {name:'hellor'},
      {name:'hellot'},
      {name:'helloy'},
      {name:'what'}
    ];
    return {
      input: "",
      items: items,
      dataSource: dataSource.cloneWithRows(items)
    };
  },

  renderRow: function(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.handleItemClick(rowData.name)}
          underlayColor='#dddddd'>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText} 
                  numberOfLines={1}>{rowData.name}</Text>
        </View>
      </TouchableHighlight>
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => this.search(text)}
            placeholder='Find item'
            clearButtonMode='always'
            autoFocus={true}
            autoCorrect={false}
            returnKeyType='search'/>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={false}/>
      </View>
    );
  },

  search: function(text) {
    text = text.toLowerCase();
    var matches = []
    this.state.items.map(function(elem) {
      if (elem.name.indexOf(text) != -1) {
        matches.push(elem);
      }
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(matches)
    });
  },

  handleItemClick: function(name) {
    this.props.updateItemName(name);
  }
});

var styles = StyleSheet.create({
  container: {  
    flex: 1,
    marginTop: 64
  },
  searchBar: {
    padding: 7,
    flexDirection: 'row',
    backgroundColor: '#48BBEC'
  },
  searchInput: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: '#FFF',
    color: '#000'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  rowText: {
    fontSize: 16,
    color: '#656565',
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

module.exports = SearchView;