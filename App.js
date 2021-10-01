import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

//import { BarCodeScanner } from 'expo-barcode-scanner';
import {enableScreens} from "react-native-screens"

enableScreens()

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "react-native-screens/native-stack"

import Home from './components/Home';
import LectorQr from './components/LectorQr';
import Instrucciones from './components/Instrucciones.';


const Stack = createNativeStackNavigator()

// export default function App() {

  
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState('Not yet scanned')

//   const askForCameraPermission = () => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })()
//   }

//   // Request Camera Permission
//   useEffect(() => {
//     askForCameraPermission();
//   }, []);

//   // What happens when we scan the bar code
//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setText(data)
//     console.log('Type: ' + type + '\nData: ' + data)
//   };

//   // Check permissions and return the screens
//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting for camera permission</Text>
//       </View>)
//   }
//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={{ margin: 10 }}>No access to camera</Text>
//         <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
//       </View>)
//   }

//   // Return the View
//   return (
//     <View style={styles.container}>
//       <View style={styles.barcodebox}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={{ height: 400, width: 400 }} />
//       </View>
//       <Text style={styles.maintext}>{text}</Text>

//       {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   maintext: {
//     fontSize: 16,
//     margin: 20,
//   },
//   barcodebox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     width: 300,
//     overflow: 'hidden',
//     borderRadius: 30,
//     backgroundColor: 'tomato'
//   }
// });

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackAnimation : "fade",
          headerStyle:{
            backgroundColor:"#24BAEA",
          },
          headerTintColor:"#fff",
          headerTitleStyle:{fontWeight:"bold"}
        }}
      >
        <Stack.Screen 
        options={{
          // headerStyle:{
          //   backgroundColor:"#24BAEA",
          // },
          // headerTintColor:"#fff",
          // headerTitleStyle:{fontWeight:"bold"}
        }}
        name="Home" component={Home}/>
        <Stack.Screen 
        options={{headerLargeTitle:true}}
        name="LectorQr" component={LectorQr}/>
        <Stack.Screen name="Instruccciones" component={Instrucciones}/>
      </Stack.Navigator>
 
    </NavigationContainer>
  )
}