import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Button,
    TextInput,
} from 'react-native';
const { height, width } = Dimensions.get('window')
import { InputBox, ButtonIcon, TextBox } from '_components';
import { useNavigation } from '@react-navigation/native'
import { Colors } from '_colours'

const Signup = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ImageBackground style={styles.imagecontainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.parentcontainer}>
                        <Text style={styles.titletext}>Register</Text>
                        <View style={{ minHeight: '20%', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <InputBox
                                placeHolder='Fullname'
                                boxStyle={styles.inputBoxstyle}
                                inputStyle={{ height: 50, textAlignVertical: 'center', }}
                                mainBox={{ bottom: 10 }}
                            />
                            <InputBox
                                placeHolder='Username'
                                boxStyle={styles.inputBoxstyle}
                                inputStyle={{ height: 50, textAlignVertical: 'center' }}
                                mainBox={{ bottom: 10 }}
                            />
                            <InputBox
                                placeHolder='Email id (optional)'
                                boxStyle={styles.inputBoxstyle}
                                inputStyle={{ height: 50, textAlignVertical: 'center' }}
                                mainBox={{ bottom: 10 }}
                            />
                        </View>
                        <View style={{ top: 20, marginBottom: 20 }}>
                            <TextInput
                                style={{ minHeight: 100, width: width - 40, borderColor: 'gray', textAlignVertical: 'top', textAlign: 'left', borderRadius: 10, padding: 5, paddingLeft: 10, backgroundColor: 'lightgray' }}
                                placeholder={'Bio (optional)'}
                                multiline={true}
                            />
                        </View>
                        <ButtonIcon
                            title="Next"
                            onPress={() => navigation.navigate('PhotoUpload')}
                        />
                        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 100, alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>Already have an account?</Text>
                            <Button style={{ fontSize: 10 }} title='Login Now' />
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
        flexDirection: 'column-reverse',

    },
    parentcontainer: {
        height: '75%',
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    titletext: {
        color: Colors.TITLECOLOUR,
        fontSize: 20,
        fontWeight: '700',
        padding: 10
    },
    inputBoxstyle: {
        width: '90%',
        height: 50,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        alignItems: 'center',
    },
    mainBoxContreoller: {
        width: '90%'
    },
    testBoxcolour: {
        minHeight: 100,
        width: width - 40,
        borderColor: 'gray',
        textAlignVertical: 'top',
        textAlign: 'left',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        backgroundColor: 'lightgray'
    }

});
export default Signup