


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Label, Card, CardSection, Button, } from '../commons';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
const ListItem = (props) => {
    return (
        
            <CardSection style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={props.onItemPress}>
                    <Label>{props.placeName}</Label>
                </TouchableOpacity>  
                <TouchableOpacity 
                    style={{ backgroundColor: '#111111', marginLeft: 30, width: 100, }}
                    onPress={props.onPlayBtnPress}    
                >
                    <Icon 
                        color='#fff'
                        name={props.iconName}
                        size={20}
                    />
                </TouchableOpacity>
            </CardSection>
              
    );
};

// define your styles


//make this component available to the app
export default ListItem;
