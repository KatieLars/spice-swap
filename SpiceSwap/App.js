/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  titleCard: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 75,
    textAlign: 'center'
  },
   backgroundImageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },

});


export default class App extends Component {

      render() {
        let backgroundPic = {
            uri: 'https://images.unsplash.com/photo-1528615798279-02f8efa6c100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2470&q=80'
        };

        return (
          <View style={styles.backgroundImageStyle} >
            <ImageBackground source={backgroundPic} style={styles.backgroundImageStyle}>
                <Text style={styles.titleCard}>Spice Swap</Text>
            </ImageBackground>
          </View>
        );

       }
}
//
//AppRegistry.registerComponent('SpiceSwap', () => App)


