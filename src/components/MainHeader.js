import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,StatusBar,SafeAreaView } from 'react-native';
import { imagePath } from '_assets'
import {Colors} from '_colours'
import { useNavigation } from '@react-navigation/native';

const INPUT_BOX_HEIGHT = 40

const MainHeader = (props) => {
    const navigation = useNavigation();
    const {

        mainBox,
    } = props;

    const OpenDrawerFunction=()=>{
        console.log("Navigation Props", navigation);
        navigation.openDrawer();
    }
    return (
        <View>
          
        <View style={styles.maincontainer}>
          
            <View style={styles.subView1}>
                <TouchableOpacity onPress={()=> OpenDrawerFunction()}>
                    <Image style={styles.menuIcon} source={imagePath.menu} />
                </TouchableOpacity>
                <Text style={{ color: 'white', paddingLeft: 5, fontWeight: '800', fontSize: 18 }}>Feeds</Text>
            </View>
            <View style={styles.subView2}>
            <Image source={imagePath.bell} style={{height:14 , width:16}} />
            <Image source={imagePath.search} style={{height:15 , width:15 , left:5,}} />
            <Image source={imagePath.rupee} style={{height:13 , width:16,left:15,}} />
            </View>
        </View>
        </View>
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
    maincontainer: {
        flexDirection: 'row',
        height: INPUT_BOX_HEIGHT,
        width: '100%',
        backgroundColor:Colors.HeaderColour
    },
    subView1: {
        flexDirection: 'row',
        height: INPUT_BOX_HEIGHT,
        width: '50%',
        alignItems: 'center',
        paddingLeft: 20
    },
    subView2: {
        // height: 80,
        width: '50%',
        right:10,
        alignItems: 'center',
        flexDirection: 'row-reverse'
    },
    menuIcon: {
        height: 26, width: 26
    }

});

export default MainHeader;