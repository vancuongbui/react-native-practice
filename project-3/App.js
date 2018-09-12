import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';   //a middleware, therefoere need to use with applyMiddleware
// import reducers from folder reducers
import { YellowBox } from 'react-native';
import reducers from './src/store/reducers';
// import storeConfig from './src/store/storeConfig';  //config store on the other file
import { StyleSheet, Text, View } from 'react-native';
// import Router from './src/components/Router';
// import Authenticate from './src/components/auth/Authenticate';
import Home from './src/components/app/Home';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);        
  //   // YellowBox.ignoreWarnings(['Warning: isMounted', 'Warning: Failed', 'warning: Setting']);
  //   // this.state = { loggedIn: null, };    //null mean the state is unknown
  //   const config = ({
  //       apiKey: 'AIzaSyA8ryJnTd9JUbW12F4d91ZyAQAiWfQRD40',
  //       authDomain: 'iapetus-auth.firebaseapp.com',
  //       databaseURL: 'https://iapetus-auth.firebaseio.com',
  //       projectId: 'iapetus-auth',
  //       storageBucket: 'iapetus-auth.appspot.com',
  //       messagingSenderId: '80149794474'
  //   });
  //   firebase.initializeApp(config);
  // }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // const store = createStore(reducers);
    // const store = storeConfig();  //if not use middleware
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
});
