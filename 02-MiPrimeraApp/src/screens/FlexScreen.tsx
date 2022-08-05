import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
    <View style = { styles.container}>
      <Text style={ styles.caja}>Caja 1</Text>
      <Text style={ styles.caja2}>Caja 2</Text>
      <Text style={ styles.caja3}>Caja 3</Text>
    </View>
  )
}

export default FlexScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems:'flex-start'
    },
    caja:{
        //flex: 3,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        //alignSelf:'center'
    },
    caja2:{
        //flex: 2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        //alignSelf:'flex-start'
    },
    caja3:{
        //flex: 1,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        //alignSelf:'flex-end'
    }
});
