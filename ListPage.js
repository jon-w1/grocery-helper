'use strict';

var React = require('react-native');
var ItemView = require('./ItemView');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

class ListPage extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.items)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    var price = 100.00;
    return (
      <TouchableHighlight //onPress={() => this.rowPressed(rowData.guid)}
          underlayColor='#dddddd'>
        <View style={styles.rowContainer}>
          <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
          <View  style={styles.textContainer}>
            <Text style={styles.title} 
                  numberOfLines={1}>{rowData.name}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  /*rowPressed(propertyGuid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    this.props.navigator.push({
      title: "Property",
      component: PropertyView,
      passProps: {property: property}
    });
  }*/

  buttonPressed() {
    this.props.navigator.push({
      title: "Add Item",
      component: ItemView,
      passProps: {item: {}}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalNumText}>$0.00</Text>
        </View>
        <TouchableHighlight onPress={() => this.buttonPressed()}
            underlayColor='#aaa' style={styles.button}>
            <Text style={styles.buttonText}>Add Item</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {  
    flex: 1
  },
  thumb: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: '#656565',
    flex: 1
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
    textAlign: 'right',
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  totalContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#888'
  },
  totalText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#656565',
    flex: 1,
    marginRight: 75,
    textAlign: 'right'
  },
  totalNumText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#51D945'
  },
  button: {
    margin: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#48BBEC'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});

module.exports = ListPage;