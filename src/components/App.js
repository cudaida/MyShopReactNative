import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Navigator } from 'react-native';

StatusBar.setHidden(true);
export default class App extends Component {
    render() {
        return (
            <View>
                <Text style={styles.main}>
                    React App Shoping
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'red'
    }
});
