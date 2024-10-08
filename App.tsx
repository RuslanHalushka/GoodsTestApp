import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/styles/colors';
import { store } from '@/src/store/store';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
        'Barlow-SemiBold': require('./assets/fonts/Barlow-SemiBold.ttf'),
        'Barlow-Medium': require('./assets/fonts/Barlow-Medium.ttf'),
        'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
        'Barlow-Light': require('./assets/fonts/Barlow-Light.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
