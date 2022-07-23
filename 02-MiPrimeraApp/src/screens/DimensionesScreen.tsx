import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

//const {width, height} = Dimensions.get('window')

const DimensionesScreen = () => {
    
    const {width, height} = useWindowDimensions();

  return (
    <View>
        <View style = { styles.container }>
        <View style = { {
            ...styles.cajaMorada,
            width: width *0.5}
            } />
        <View style = {styles.cajaNaranja} />
        </View>
        <Text
            style = { styles.title}
        >W: { width }, H: { height } </Text>
    </View>
  )
}

export default DimensionesScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:300,
        backgroundColor:'red'
    },
    cajaMorada:{
        backgroundColor: '#5856D6',
        //width:'50%',
        height:'50%'
    },
    cajaNaranja:{
        backgroundColor:'#F0A23B'
    },
    title:{
        fontSize:45,
        textAlign:'center'
    }
    
})