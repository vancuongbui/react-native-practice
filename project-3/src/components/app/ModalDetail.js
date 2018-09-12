//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, } from 'react-native';
import { Label, Button, } from '../commons';

// create a component
const ModalDetail = (props) => {
    return (
        <Modal>
            <View>
                <Image 
                    source={require('../../static/images/Dante-2.jpg')}
                />
                <Label>{props.selectTextItem.text}</Label>
                <Button>something</Button>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    }   
});

//make this component available to the app
export default ModalDetail;
