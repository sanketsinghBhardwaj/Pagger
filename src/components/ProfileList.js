import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '_colours'
import { Help, Rupee, User, Settings, Sync, Logout, Block, Call, Report ,Follower  , Test} from '_assets';
const INPUT_BOX_HEIGHT = 50
const widthIcon = 22;
const heightIcon = 22;
const ProfileList = (props) => {
    const {
        title,
        OnPress,
        iconName
    } = props;
    return (
        <View>
            <TouchableOpacity style={styles.containerStyle} onPress={OnPress}>
                <TouchableOpacity>
                    {iconName == 'User' ? <User width={widthIcon} height={heightIcon} fill='red'/> :
                        iconName == 'Rupee' ? <Rupee width={widthIcon} height={heightIcon} /> :
                            iconName == 'Sync' ? <Sync width={widthIcon} height={heightIcon} /> :
                                iconName == 'Call' ? <Call width={widthIcon} height={heightIcon} /> :
                                    iconName == 'Block' ? <Block width={widthIcon} height={heightIcon} /> :
                                        iconName == 'Settings' ? <Settings width={widthIcon} height={heightIcon} /> :
                                            iconName == 'Help' ? <Help width={widthIcon} height={heightIcon} /> :
                                                iconName == 'Report' ? <Report width={widthIcon} height={heightIcon} /> :
                                                    iconName == 'Logout' ? <Logout width={widthIcon} height={heightIcon} /> : null}
                </TouchableOpacity>
                <View style={{ left: 10 }}>
                    <Text style={{}}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    containerStyle: {
        width: 195,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
});

export default ProfileList;