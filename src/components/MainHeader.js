import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { imagePath } from '_assets'
import {Colors} from '_colours'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const INPUT_BOX_HEIGHT = 40

const MainHeader = (props) => {
    const {

        mainBox,
    } = props;
    return (
        <View style={styles.maincontainer}>
            <View style={styles.subView1}>
                <TouchableOpacity>
                    <Image style={styles.menuIcon} source={imagePath.menu} />
                </TouchableOpacity>
                <Text style={{ color: 'white', paddingLeft: 5, fontWeight: '800', fontSize: 18 }}>Feeds</Text>
            </View>
            <View style={styles.subView2}>
            <EvilIcons name='bell'
            size={22}
            color={'white'}
            />
           
             <AntDesign
            name='search1'
            size={22}
            color={'white'}
            />  
              <FontAwesome size={22}
            name='rupee'
            color={'white'}
            />  
            </View>
        </View>
    );

}
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
        height: INPUT_BOX_HEIGHT,
        width: '50%',
        right:20,
        alignItems: 'center',
        flexDirection: 'row-reverse'
    },
    menuIcon: {
        height: 26, width: 26
    }

});

export default MainHeader;