// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import AllowPermissionsScreen from './screens/AllowPermissionsScreen';
import PhoneNumberScreen from './screens/PhoneNumberScreen';
import VerificationScreen from './screens/VerificationScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import SetupCompleteScreen from './screens/SetupCompleteScreen';
import HomePageScreen from './screens/HomePageScreen';
import MessageScreen from './screens/MessageScreen';
import StoriesScreen from './screens/StoriesScreen';
import CallsScreen from './screens/CallsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import PolicyScreen from './screens/PolicyScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllowPermissions"
          component={AllowPermissionsScreen}
          options={{ headerShown: false }}
        />
        
                <Stack.Screen
          name="Policy"
          component={PolicyScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumberScreen}
          options={{ headerTitle: 'Enter Phone Number', headerRight: () => null }}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ headerTitle: 'Verification Code', headerRight: () => null }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetupComplete"
          component={SetupCompleteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePageScreen}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="Stories"
          component={StoriesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Calls"
          component={CallsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{ headerTitle: 'Privacy Policy', headerRight: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
