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

const PhotoUpload = () => {
const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ImageBackground style={styles.imagecontainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.parentcontainer}>
                        <Text style={styles.titletext}>Upload Photo</Text>
                        <View style={styles.imgContainer}>
                            <TouchableOpacity>
                                <Image
                                    source={imagePath.cameraIcon}
                                    style={styles.imgStyle}
                                />
                            </TouchableOpacity>
                        </View>
                        <ButtonIcon
                            title="Register"
                            onPress={()=> navigation.navigate('Signup')}
                        />
                    </View>
                </View>
            </ImageBackground>
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
export default PhotoUpload