import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Login} from '_screens'
const MainStack = createStackNavigator();
import UserFlow from './UserFlow';
import MyTabs from './TabviewHandler'
import MyDrawer from './DrawerNavigation';
const Drawer = createDrawerNavigator();
const WholeApp = () => {
    return (
        <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

    )
}

export default WholeApp