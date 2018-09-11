//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MenuIcon extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuStyle}/>
                <View style={styles.menuStyle}/>
                <View style={styles.menuStyle}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    menuStyle: {
        borderTopWidth: 2,
        borderTopColor: '#ffffff',
        width: 25,
    }
});

//make this component available to the app
export { MenuIcon };
