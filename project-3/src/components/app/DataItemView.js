


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { Label, Card, CardSection, Button, } from '../commons';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
const DataItemView = (props) => {
    return (
        
            <CardSection style={{ flexDirection: 'row', }}>
                    <View style={{ width: '20%', marginRight: 5, }}>
                        <Image 
                            source={require('../../static/images/Dante-1.jpg')}
                            style={{ height: 40, width: 40, }}
                        />

                    </View>
            
                    <View
                        // onPress={props.onTextPress}
                        style={{ flexWrap: 'wrap', width: '65%', marginRight: 10, }}
                    >
                        <Label>{props.text}-{props.keyId}</Label>
                    </View> 
                
                    <View                        
                        // onPress={props.onBtnPress}    
                        style={{ backgroundColor: '#ffffff', marginLeft: 10, width: '5%', height: 45, marginRight: 0, }}
                    >
                        <Icon 
                            color='#111'
                            name={props.iconName}
                            size={20}
                            style={{ paddingTop: 7, }}
                        />
                    </View>
                
            </CardSection>
              
    );
};

// define your styles


//make this component available to the app
export default DataItemView;
