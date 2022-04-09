import React, { useEffect } from 'react';
import { useWindowDimensions, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import { Chats } from '_screens'
const { height, width } = Dimensions.get('window')
import UserFlow from './UserFlow';
import MyTabs from './TabviewHandler'

import { ProfileList } from '_components';
import { colors } from 'react-native-elements';

import { Report } from '_assets';
const Drawer = createDrawerNavigator();
let Data = [
  { id: 0, name: "Profile", icon:'User' },
  { id: 1, name: "All Transactions", icon: 'Rupee' },
  { id: 2, name: "Sync Contacts" , icon:'Sync'},
  { id: 3, name: "Call", icon : 'Call' },
  { id: 4, name: "Blocked Users" , icon:'Block'},
  { id: 5, name: "Settings",icon:'Settings' },
  { id: 6, name: "Help", icon : 'Help' },
  { id: 7, name: "Reports and Problems",icon:'Report' },
  { id: 8, name: "Logout" , icon : 'Logout' },
]

function MyDrawer() {
  const dimensions = useWindowDimensions();
  // const width = useWindowDimensions().width * 0.3;
  const height = useWindowDimensions().height;

  return (
    <Drawer.Navigator
      initialRouteName='UserFlow'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, swipeEdgeWidth: 0, drawerStyle: { width: 320 } }}
    >
      <Drawer.Screen name='MyTabs' component={MyTabs} />
      <Drawer.Screen name='UserFlow' component={UserFlow} />
    </Drawer.Navigator>
  )
}
function CustomDrawerContent(props) {


  const renderlistitem = (item, index) => {
    return (
      <View>
        <ProfileList title={item.name}
          iconName={item.icon}
        />

      </View>
    )
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View style={styles.container}>
          <View style={styles.profileBox}>
          </View>
          {/*  */}

        </View>
        <FlatList
          data={Data}
          renderItem={({ item, index }) => renderlistitem(item, index)}
        />
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 210,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuContainer: {
    flex: 1,
    alignContent: 'center',
    height: height,
  },
  profileBox: {
    height: 132,
    width: 96,
    backgroundColor: 'blue'
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
export default MyDrawer;