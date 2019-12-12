import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/screens/SignupScreen';
import SigninScreen from './src/screens/screens/SigninScreen';
import TrackCreateScreen from './src/screens/screens/TrackCreateScreen';
import AccountScreen from './src/screens/screens/AccountScreen';
import TrackListScreen from './src/screens/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/screens/TrackDetailScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/helpers/navigationRef';
import ResolveOffScreen from './src/screens/ResolveOffScreen';
 
const switchNavigator = createSwitchNavigator({
  ResolveOff: ResolveOffScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator); 

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)}/>
    </AuthProvider>
  )
}