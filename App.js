import {useColorScheme} from 'react-native';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListUser} from './Page/ListUser';
import {AddUser} from './Page/AddUser';

const Stack = createNativeStackNavigator();

export const App = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="List User">
        <Stack.Screen name="List User" component={ListUser} />
        <Stack.Screen name="Add User" component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
