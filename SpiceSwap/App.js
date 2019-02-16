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
import {Button, ButtonGroup} from 'react-native-elements';
import LoginPage from './src/containers/LoginPage.js';


const styles = StyleSheet.create({
   backgroundImageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    titleCard: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 75,
      textAlign: 'center'
    },
    blurbStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
      fontSize: 25,
    },
    signupButtonStyle: {
      backgroundColor: "#89a6d6",
      width: '100%',
      marginTop: '5%'
    },
    signinButtonStyle: {
      backgroundColor: "#0944a3",
      width: '100%',
      marginTop: '5%'
    }
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
                <Text style={styles.blurbStyle}>Coordinate with your friends to share, swap, and get exactly the amount of spice you need</Text>
                <View>
                  <Button 
                  
                    buttonStyle={styles.signupButtonStyle}
                    title="Sign Up"
                    accessibilityLabel="Sign Up for Spice Swap"
                  />
                  <Button
                    title="Sign In"
                    buttonStyle={styles.signinButtonStyle}
                  
                    accessibilityLabel="Sign into Spice Swap"
                  />
                </View>
            </ImageBackground>
          </View>
        );

       }
}
//
//AppRegistry.registerComponent('SpiceSwap', () => App)


