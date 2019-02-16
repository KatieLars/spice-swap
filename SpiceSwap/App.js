/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import LoginPage from './components/LoginPage.js';


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

type Props = {};
export default class App extends Component<Props> {

      render() {
        let backgroundPic = {
            uri: 'https://images.unsplash.com/photo-1528615798279-02f8efa6c100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2470&q=80'
        };

        return (
          <View style={styles} >
            <ImageBackground source={backgroundPic} style={styles.backgroundImageStyle}>
                <LoginPage />
            </ImageBackground>
          </View>
        );

       }
}
//
//AppRegistry.registerComponent('SpiceSwap', () => App)


