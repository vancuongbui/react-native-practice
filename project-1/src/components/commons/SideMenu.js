//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CardSection, Label } from '.';

// create a component
class SideMenu extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Home</Label>
                    </CardSection>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Introduction</Label>
                    </CardSection>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Select Domain</Label>
                    </CardSection>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Select Lesson</Label>
                    </CardSection>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Authors</Label>
                    </CardSection>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Ackowledgement</Label>
                    </CardSection>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CardSection style={styles.menuStyle}>
                        <Label style={styles.textColor}>Logout</Label>
                    </CardSection>
                </TouchableOpacity>                    
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: 250,
        flexDirection: 'column',
        backgroundColor: '#111111',
        borderBottomRightRadius: 5,
        paddingTop: 10,
        paddingBottom: 20,
        // position: 'absolute',
    },
    textColor: {
        color: '#FFFFFF',
    },
    menuStyle: {
        backgroundColor: '#111111',
        borderBottomColor: '#bcbcbc',
        borderBottomWidth: 1,
    }
});

//make this component available to the app
export { SideMenu };
