import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Chats,Feeds,Stories,NewsFeeds} from '_screens';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="News" component={NewsFeeds} />
    </Tab.Navigator>
  );
}
export default MyTabs;