import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,

} from 'react-native';
const { height, width } = Dimensions.get('window')
import { InputBox , ButtonIcon } from '_components';
import {useNavigation} from '@react-navigation/native'

const Login = () => {
   const navigation = useNavigation();

    
    return (
        <SafeAreaView>
            <ImageBackground style={styles.imagecontainer}>
                <View style={styles.mainContainer}>
                <View style={styles.parentcontainer}>
                    <Text style={styles.titletext}>Log in</Text>
                <InputBox
                placeHolder='Mobile'
                boxStyle={styles.inputBoxstyle}
                inputStyle={{height:50,textAlignVertical : 'center'}}
                />
                <ButtonIcon
                title="Login"
                onPress={()=> navigation.navigate('OtpScreen')}
                />
                </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imagecontainer: {
        // backgroundColor: 'red',
        height: height,
        width: width
    },
    mainContainer: {
        // alignSelf: 'center',
        // justifyContent: 'center',
        backgroundColor: 'transparent',
        height: height,
        width: width,
        flexDirection:'column-reverse',
    },
    parentcontainer: {
        height:350,
         width:width,
          backgroundColor:'white',
          alignItems:'center'
    },
    titletext: {
        color:'purple',
        fontSize:20,
         fontWeight:'700',
         padding:10
    },
    inputBoxstyle:{
        width:'90%',
        height:50,
        backgroundColor:'lightgray',
         borderRadius:10,
         alignItems:'center'
    }
});
export default Login