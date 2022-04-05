import React, { useEffect } from 'react';
import {View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Chats,Feeds,Stories,NewsFeeds} from '_screens';
import {MainHeader} from '_components';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
<>
    <MainHeader />
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="News"
       component={NewsFeeds} 
       />
    </Tab.Navigator>
    </>
  );
}
export default MyTabs;