//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from './ListItem'

// create a component
const PlaceList = (props) => {
    // const placesList = props.places.map((place, i) => (
    //     <ListItem 
    //         key={i}
    //         placeName={place.placeName}
    //         onItemPress={() => props.onItemDelete(i)}
    //         iconName={place.iconName}
    //         onPlayBtnPress={() => props.onPlayBtnPress(i)}
    //     />
    // ));
  
    return (
        <FlatList
            data={props.places}
            renderItem={({item}) => {
                return (
                    <ListItem 
                        placeName={item.placeName}
                        onItemPress={() => props.onItemDelete(item.id)}
                        iconName={item.iconName}
                        onPlayBtnPress={() => props.onPlayBtnPress(item.id)}
                    />
                )
            }}
            keyExtractor={item => item.id}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PlaceList;
