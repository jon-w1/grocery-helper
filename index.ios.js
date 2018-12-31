'use strict';
var React = require('react-native');
var ListPage = require('./ListPage');
var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  }
});

class GroceryHelperApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Grocery Helper',
          component: ListPage,
          passProps: {items: [
            {
              id:1, 
              name: 'Bananas',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:2, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:3, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:4, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:5, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:6, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:7, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            },{
              id:8, 
              name: 'Eggs',
              img_url: 'http://bernardgoldberg.com/wp-content/uploads/bananas.jpg'
            }
          ]}
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('GroceryHelper', function() {
  return GroceryHelperApp;
});