import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
 Login,
 OtpScreen
} from '_screens';

const UserStack = createStackNavigator();

function UserFlow() {
  return (
    <UserStack.Navigator
   
      screenOptions={({navigation, route}) => ({
        headerMode: 'screen',
        cardStyle: {backgroundColor: 'white'},
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerTransparent: true,
        // headerTitleStyle: {...globalStyles.headerTitle},
        // headerStyle: { backgroundColor: 'transparent' }
      })}>
     
     <UserStack.Screen name="Login" component={Login} />
     <UserStack.Screen name="OtpScreen" component={OtpScreen}  />
    </UserStack.Navigator>
  );
}

export default UserFlow;
