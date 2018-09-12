//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CardSection, Label } from '../commons';
import DataItemView from './DataItemView';

// create a component
class DataListView extends Component {
   

    // 
    render() {
        return (
            <FlatList 
                data={this.props.data}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => this.props.onItemPress(item.key)}>
                            <DataItemView 
                            text={item.text}
                            keyId={item.key}
                            // onTextPress={this.props.onTextPressHandler(item.key)}
                            // onBtnPress={this.props.onBtnPresshandler(item.key)}
                            iconName={item.status}
                        />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.key}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    rowStyle: {
        flexDirection: 'row',
        flex: 1,
    }
});

//make this component available to the app
export default DataListView;
