



import 'react-native-gesture-handler';
import React from 'react'
import AppNavigation from './src/config/appNavigation/AppNavigation';
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App