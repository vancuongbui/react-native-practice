import React from 'react';
import { ScrollView } from 'react-native';

const Card = (props) => {
  return (
    <ScrollView style={[styles.containerStyle, props.style]}>
      {props.children}
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  }
};

export { Card };
