import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Login} from '_screens'
const MainStack = createStackNavigator();
import UserFlow from './UserFlow';


const WholeApp = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName='UserFlow'
                screenOptions={({ navigation, route }) => ({
                    headerMode: 'screen',
                    cardStyle: { backgroundColor: 'white' },
                    headerShown: false,
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    // headerTitleStyle: { ...globalStyles.headerTitle },
                })}>
                <MainStack.Screen name="UserFlow" component={UserFlow} />
            </MainStack.Navigator>
        </NavigationContainer>

    )
}

export default WholeApp