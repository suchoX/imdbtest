/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationUtils from './utils/NavigationUtils';
import TabSearchIcon from './assets/tabSearch';
import HomeScreen from './ui/screens/HomeScreen';
import SearchScreen from './ui/screens/SearchScreen';
import SettingsScreen from './ui/screens/SettingsScreen';
import TabSettingsIcon from './assets/tabSettings';
import TabTrendIcon from './assets/tabTrend';
import Colors from './utils/Colors';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const getNavigationComponent = () => {
    return (
      <Tab.Navigator
        initialRouteName={NavigationUtils.SCREEN_TRENDING}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.BLUE,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name={NavigationUtils.SCREEN_TRENDING}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <TabTrendIcon enabled={focused} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigationUtils.SCREEN_SEARCH}
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <TabSearchIcon enabled={focused} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigationUtils.SCREEN_SETTINGS}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <TabSettingsIcon enabled={focused} width={size} height={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.DARK_BLUE}
          translucent
        />
        {getNavigationComponent()}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
