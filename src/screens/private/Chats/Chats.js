import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window')
import {ButtonIcon } from '_components';
import { Colors, } from '_colours';
import { imagePath } from '_assets'

const Chats = () => {
const navigation = useNavigation();


    return (
        <SafeAreaView>
            <SafeAreaView>
            <View style={{ alignItems:'center', justifyContent:'center'}}>
                <Text>Chats</Text>
            </View>
        </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imagecontainer: {
        height: height,
        width: width
    },
    mainContainer: {
        backgroundColor: 'transparent',
        height: height,
        width: width,
        flexDirection: 'column-reverse',
    },
    parentcontainer: {
        height: 550,
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    titletext: {
        color: Colors.TITLECOLOUR,
        fontSize: 20,
        fontWeight: '700',
        padding: 10
    },
    imgContainer: {
        minHeight: 200,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        height: 146,
        width: 146,
        borderRadius: 10,
        backgroundColor: '#90929A',
        resizeMode: 'center'
    }
});
export default Chats