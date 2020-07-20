import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from './src';
import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
};

export default App;
