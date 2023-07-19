import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Views
import Home from '../views/Home/Home';
import Detail from '../views/Detail/Detail';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  headerTransparent: false,
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* Views */}
        <Stack.Screen
          name='Home'
          component={Home}
          options={screenOptions}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
