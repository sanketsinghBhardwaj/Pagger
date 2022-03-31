import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

const INPUT_BOX_HEIGHT = 50

const InputBox =(props)=>{
    const {
        placeHolder,
        boxStyle,
        inputStyle,
        maxLines,
        placeHolderTextColor,
        mainBox,
      } = props;
      return (
        <View styles={[styles.maincontainer, {...mainBox}]}>
        <Input
          {...props}
          multiline={maxLines > 1}
          numberOfLines={maxLines > 0 ? maxLines : null}
          placeholder={placeHolder}
          placeholderTextColor={placeHolderTextColor}
          containerStyle={[styles.box, {...boxStyle}]}
          inputStyle={[styles.input, inputStyle]}
          inputContainerStyle={styles.inputContainerStyle}
        />
        </View>
      );

}
const styles = StyleSheet.create({
  maincontainer:{

  },
  
  box: {
      paddingLeft: 20,
      height: INPUT_BOX_HEIGHT,
      backgroundColor: 'white',
      borderRadius: INPUT_BOX_HEIGHT / 2,
    //   justifyContent: 'center',
     
    },
    input: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      textAlignVertical:'center'
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    searchImage: {
      width: 16,
      height: 16,
      alignSelf: 'center',
    },
  });
  
  export default InputBox;