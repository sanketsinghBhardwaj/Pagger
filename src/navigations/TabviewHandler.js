import React, { useEffect } from 'react';
import {View , Image ,SafeAreaView,StatusBar,StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Chats,Feeds,Stories,NewsFeeds} from '_screens';
import {imagePath} from '_assets'
import {MainHeader} from '_components';
import {Colors} from '_colours'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
<>
<StatusBar translucent backgroundColor={Colors.HeaderColour} barStyle='dark-content'  />
    <MainHeader />
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={Feeds}
      options={{
        tabBarShowLabel : false,
        tabBarIcon: ({ color, size }) => (
         <Image source={imagePath.users} style={{height:22,width:23}} />
        ),
      }}
      />
      <Tab.Screen name="Chats" component={Chats} 
       options={{
        tabBarShowLabel : false,
        tabBarIcon: ({ color, size }) => (
         <Image source={imagePath.circle} style={{height:22,width:23}} />
        ),
      }}/>
      <Tab.Screen name="Stories" component={Stories}
       options={{
        tabBarShowLabel : false,
        tabBarIcon: ({ color, size }) => (
         <Image source={imagePath.chat} style={{height:22,width:23}} />
        ),
      }} />
      <Tab.Screen name="News"
       component={NewsFeeds} 
       options={{
        tabBarShowLabel : false,
        tabBarIcon: ({ color, size }) => (
         <Image source={imagePath.home} style={{height:22,width:23}} />
        ),
      }}
       />
    </Tab.Navigator>
    </>
  );
}
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
const styles = StyleSheet.create({
  statusBar:{
    height:40
  }
})
export default MyTabs;