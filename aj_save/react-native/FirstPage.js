//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Text, Image} from 'react-native';
//import all the components we are going to use.
export default class FirstPage extends React.Component {
  static navigationOptions = {
    title: 'First Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View> 
          <Image source={require('./Logo.png')}  
              style={{width: 350, height: 150, marginTop:10}} 
          /> 
        </View>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tellus id dui iaculis porta. ... Add More Content

        </Text>
        <Button title='Go next'
        onPress={() =>navigate('two')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});