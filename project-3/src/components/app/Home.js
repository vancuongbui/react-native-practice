//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Header, Footer, Label, CardSection, } from '../commons';
import InputData from './InputData';
import DataListView from './DataListView';
import { 
    addDataToArray,
    deleteItemAction,
    selectedItemAction,
    deselectedItemAction,
    getInputData,
} from '../../store/actions';


// create a component
class Home extends Component {

    onAddBtnPressHandler = () => {
        const textInput = this.props.textInput; //received from connect, that was created by input action
        this.props.onArrayPush(textInput);
    };

    onSelectedItemHandler = (key) => {
        this.props.onSelectItem(key);
    };

    onDelBtnPressHandler = () => {
        this.props.onArrayFilter();
    };

    onUnselectedhandler = () => {

    };

    // renderSelectedItem = () => {
    //     const selectedItem = this.props.selectedItem;
    //     alert(selectedItem);
    //     return (
    //         <View>
    //             <Label>{selectedItem ? selectedItem.text : "default text"}</Label>
    //         </View>            
    //     )
    // };
    render() {
        
        return (
            <View style={styles.container}>
                <Header headerText="IAPETUS Practice" />
                <InputData 
                    onAddBtnPress={this.onAddBtnPressHandler}
                    onDelBtnPress={this.onDelBtnPressHandler}
                />
                <View>
                    <DataListView 
                        data={this.props.newArray}
                        onItemPress={this.onSelectedItemHandler}
                    />
                </View>
                <CardSection>
                   {/* {this.renderSelectedItem} */}
                </CardSection>
                <Footer />
            </View>
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

//make this component available to the app
// mapFunction
const mapStateToProps = state => {
    // alert(state.arrayData.selectedItem ? state.arrayData.selectedItem.text : 'nothing selected')
    return {
        textInput: state.textInput.textInput,
        newArray: state.arrayData.dataArray,
        selectedItem: state.arrayData.selectedItem,
    };
    // return { textInput };
};
// this dispatch function is to dispatch actions, then send the data to the store
const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (text) => dispatch(getInputData(text)),
        onArrayPush: (newEntry) => dispatch(addDataToArray(newEntry)),
        onArrayFilter: () => dispatch(deleteItemAction()),
        onSelectItem: (selectedKey) => dispatch(selectedItemAction(selectedKey)),
        ondeselectedItem: () => dispatch(deselectedItemAction()),
    };
};
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Home);
