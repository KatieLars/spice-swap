import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    titleCard: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 75,
        textAlign: 'center'
      },
})

export default class LoginPage extends Component {
    render() {
        return(
            <View>
                <Text style={styles.titleCard}>NyermTown</Text>
            </View>
        )
    }
}