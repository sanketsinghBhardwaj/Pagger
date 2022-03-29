import React from 'react';
import {StyleSheet, Text , TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const INPUT_BOX_HEIGHT = 50

const ButtonIcon =(props)=>{
    const {
        title,
        constinerStyle,
        onPress
      } = props;
      return (
       <TouchableOpacity style={[styles.containerStyle,constinerStyle]} onPress={onPress}>
           <TouchableOpacity>
               <Text style={{color:'white', fontSize:18,fontWeight:'500'}}>{title}</Text>
           </TouchableOpacity>
           <AntDesign size={24} color="gray" name="right" />
       </TouchableOpacity>
      );

}
const styles = StyleSheet.create({
    containerStyle: {
    //   padding: 20,
      height: INPUT_BOX_HEIGHT,
      backgroundColor: 'white',
      borderRadius: 10,
      flexDirection:'row',
      width:'90%',
      justifyContent:'space-between',
      backgroundColor:'blue',
      alignItems:'center',
      paddingRight:10,
      paddingLeft:20,
      top:20
    },
  });
  
  export default ButtonIcon;