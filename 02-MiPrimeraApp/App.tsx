
import React from 'react'
import { SafeAreaView } from 'react-native'
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import DimensionesScreen from './src/screens/DimensionesScreen'
//import HolaMundoScreen from './src/screens/HolaMundoScreen'

const App = () => {
  return (
    <SafeAreaView style = {{ flex:1 }}>
    {/*<HolaMundoScreen/>*/}
    {/*<ContadorScreen/>*/}
    {/*<BoxObjectModelScreen/>*/}
    <DimensionesScreen/>
    </SafeAreaView>

  )
}

export default App
