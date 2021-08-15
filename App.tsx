import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './scr/routes/app.routes';

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

        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>

      </ThemeProvider>
    </>
  );
}
