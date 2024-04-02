import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <Stack screenOptions={{ 
            headerShown: false,
            headerTintColor: 'white',
            headerTitle: '',
            statusBarStyle: 'light',
        }}>
          <Stack.Screen name="index"
          options={{ statusBarColor: 'black' }}/>
          <Stack.Screen/>
        </Stack>
      )
    }