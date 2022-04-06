import React from 'react';
import {StyleSheet, View , TextInput} from 'react-native';
import {Input} from 'react-native-elements';

const INPUT_BOX_HEIGHT = 50

const TextBox =(props)=>{
    const {
        placeHolder,
        boxStyle,
        inputStyle,
        maxLines,
        placeHolderTextColor,
        mainBox,
        textboxstyle,
      } = props;
      return (
        <View styles={[styles.maincontainer, {...mainBox}]}>
            <TextInput
            style={[styles.testbox, textboxstyle]}
            textAlignVertical={true}
             placeholder={placeHolder}
             
            />
        </View>
      );

}
const styles = StyleSheet.create({
  maincontainer:{
  width:'100%',
  marginTop:20,
  },
  testbox:{
minHeight:100,
width:300,
borderWidth:0.5,
textAlign:'left'
  }
  });
  
  export default TextBox;