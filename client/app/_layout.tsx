import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { MedConnectContext } from '@/context';
import { TopBar } from '@/components/molecules/TopBar';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [user, setUser] = useState({ name: "John Doe" });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MedConnectContext.Provider value={{ user, setUser }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ header: () => <TopBar title={`Hola, ${user.name}!`} /> }} />
          <Stack.Screen name="profile" options={{ header: () => <TopBar title="Mi Perfil" backArrow /> }} />
          <Stack.Screen name="specialties" options={{ header: () => <TopBar title="Agendá un turno" backArrow /> }} />
          <Stack.Screen name="doctors" options={{ header: () => <TopBar title="Agendá un turno" backArrow /> }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </MedConnectContext.Provider>
    </ThemeProvider>
  );
}
