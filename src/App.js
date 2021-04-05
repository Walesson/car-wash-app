import React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {Theme} from './services/theme';
import {Routes} from './routes';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Theme.colors.background}
        />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
