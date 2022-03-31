import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Button,
} from 'react-native';
const { height, width } = Dimensions.get('window')
import { InputBox , ButtonIcon,TextBox } from '_components';
import {useNavigation} from '@react-navigation/native'

const Signup = () => {
   const navigation = useNavigation();

    
    return (
        <SafeAreaView>
            <ImageBackground style={styles.imagecontainer}>
                <View style={styles.mainContainer}>
                <View style={styles.parentcontainer}>
                    <Text style={styles.titletext}>Register</Text>
                    <View style={{minHeight:'20%',justifyContent:'space-between', width:'100%', alignItems:'center'}}>
                <InputBox
                placeHolder='Fullname'
                boxStyle={styles.inputBoxstyle}
                inputStyle={{height:50,textAlignVertical : 'center' ,}}
                mainBox={{bottom:10}}
                />
                 <InputBox
                placeHolder='Username'
                boxStyle={styles.inputBoxstyle}
                inputStyle={{height:50,textAlignVertical : 'center'}}
                mainBox={{bottom:10}}

                />
                 <InputBox
                placeHolder='Email id (optional)'
                boxStyle={styles.inputBoxstyle}
                inputStyle={{height:50,textAlignVertical : 'center'}}
                mainBox={{bottom:10}}

                />
                </View>
                <TextBox 
                 placeHolder='Type here'
                 textboxstyle={{  minHeight:100 , padding:10}}
                 mainBox={{marginTop:15 , width:'90%' , top:50 }}
                 />
                <ButtonIcon
                title="Next"
                onPress={()=> navigation.navigate('OtpScreen')}
                />
                <View style={{flexDirection:'row',position:'absolute', bottom:100  , alignItems:'center'}}>
                  <Text style={{fontSize:18}}>Already have an account?</Text>
                  <Button style={{fontSize:10}} title='Login Now'/>
                  </View>
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
        height:'75%',
         width:width,
          backgroundColor:'white',
          alignItems:'center',
        
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
         alignItems:'center',
    },
    mainBoxContreoller:{
        width:'90%'
    }
});
export default Signup