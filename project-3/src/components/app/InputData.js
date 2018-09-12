//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Label } from '../commons';
import { 
    getInputData, 
    addDataToArray,
    selectedItemAction,
} from '../../store/actions';
import DataListView from './DataListView';
import ModalDetail from './ModalDetail';


// create a component
class InputData extends Component {
    
    // process onchangetext
    onChangeTextHandler = (inputText) => {
        this.props.onInputChange(inputText);
    }

    render() {
        // console.log(this.props.textInput);
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Test input data"
                        value={this.props.textInput}
                        onChangeText={this.onChangeTextHandler}
                        placeHolder='Please enter something'
                    />
                    <View style={{ flexDirection: 'row', }}>
                        <Button
                            onPress={this.props.onAddBtnPress}
                        >Add               
                        </Button>
                        <Button
                            onPress={this.props.onDelBtnPress}
                        >Delete               
                        </Button>
                    </View>    
                </CardSection>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
// mapFunction
const mapStateToProps = state => {
    return { 
        textInput: state.textInput.textInput,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (text) => dispatch(getInputData(text)),
    };
};
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(InputData);
