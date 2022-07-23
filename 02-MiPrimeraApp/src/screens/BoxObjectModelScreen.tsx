import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style = { styles.container }>
      <Text style = { styles.title }> Box Object Model</Text>
    </View>
  )
}

export default BoxObjectModelScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red'
  },
  title:{
    paddingHorizontal:100,
    paddingVertical:20,
    marginHorizontal:10,
    fontSize: 20,
    //backgroundColor:'red'
    borderWidth:10
  }
})
