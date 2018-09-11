//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header, Footer, Input, CardSection, Button, Card, Label, } from '../commons';
import placesList from './PlaceList';
import PlaceList from './PlaceList';


// create a component
class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        itemRow: { placeName: '', iconName: 'play', id: 1, url: require('../../static/images/Dante-1.jpg') },        
        places: [],
        };
    };
    
    placeNameChangeHandler = (value) => {
        this.setState(prevState => {
            return {
                itemRow: {
                    placeName: value,
                    iconName: 'play',
                    id: Math.random(100).toString(),
                }
            }
        })
    }

    onAddBtnHandler = () => {
        if (this.state.itemRow.placeName.trim() ==='') {
            return;
        }
        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.itemRow),
                // iconList: prevState.iconList.concat(prevState.iconName)
            };
        });
    }

    onItemDeleteHandler = (key) => {
        this.setState(prevState => {
            return {
                // filter the place based on true or false: false means delete that place
                // compare the index with the key, if equal, then delete
                places: prevState.places.filter((item) => {
                    return item.id !== key;  // compare the index with the key, if equal, then delete
                })
            }
            // return {
            //     places: prevState.places.filter((place, i) => {
            //         // filter the place based on true or false: false means delete that place
            //         // compare the index with the key, if equal, then delete
            //         return i !== index;
            //     })
            // }
        })
    }

    onItemPressHandler = (key) => {
        this.setState(prevState => {
            return {
                places: prevState.places.map((place) => {
                    if (place.id === key) {
                        if (place.iconName === "stop") {
                            return {
                                    placeName: place.placeName,
                                    iconName: 'play',
                                    id: place.id,
                            };
                        }
                        return {
                                placeName: place.placeName,
                                iconName: 'stop',
                                id: place.id,
                        };
                    } else {
                        return {
                                placeName: place.placeName,
                                iconName: 'play',
                                id: place.id,
                        };
                    }
                    // filter the place based on true or false: false means delete that place
                    // compare the index with the key, if equal, then delete
                })
            }
            // return {
            //     places: prevState.places.filter((place, i) => {
            //         // filter the place based on true or false: false means delete that place
            //         // compare the index with the key, if equal, then delete
            //         return i !== index;
            //     })
            // }
        })
    }

    render() {
            
        return (
            <View style={styles.container}>
                <Header headerText="Practice-1" />
                    <CardSection style={styles.rowStyle}>
                        <View style={styles.textStyle}>
                            <Input 
                                // secureTextEntry={secureTextEntry}
                                value={this.state.itemRow.placeName}                     
                                onChangeText={this.placeNameChangeHandler}
                                placeholder="entersomething here"
                                label="Input Text Field"                    
                            />
                        </View>
                        <View style={styles.btnStyle}>
                            <Button
                                onPress={this.onAddBtnHandler}
                            >Add </Button>
                        </View>                    

                    </CardSection>
                    <Card>
                        <PlaceList 
                            places={this.state.places}
                            onItemDelete={this.onItemDeleteHandler}
                            iconName={this.state.itemRow.iconName}
                            onPlayBtnPress={this.onItemPressHandler}
                        />
                    </Card>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rowStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        flex: 4,
        marginRight: 10,
    },
    tbnStyle: {
        flex: 1,
        color: '#1111',
        justifyContent: 'center',
        height: 60,
        padding: 10,
    }

});

//make this component available to the app
export default Home;
