import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    //flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    marginRight: 5,
    marginLeft: 5,
  }
};

export { CardSection };
