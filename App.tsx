import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Dashboard } from './scr/screens/Dashboard';
import { Register } from './scr/screens/Register';

import { ThemeProvider } from 'styled-components';
import theme from './scr/global/styles/theme';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>

      <ThemeProvider theme={theme}>

        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <Register/>

      </ThemeProvider>
    </>
  );
}
