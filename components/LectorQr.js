import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import jwt_decode from "jwt-decode"


const LectorQr = () => {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Colocar sobre un codigo QR')
    const [dni,setDni] = useState(null)
  
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })()
    }
  
    // Request Camera Permission
    useEffect(() => {
      askForCameraPermission();
    }, []);
  
    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
     // setText(data)

      console.log('Type: ' + type + '\nData: ' + data)
      
      var dataCompleta = data;
      var data2 = dataCompleta.split("=")[1];
      //console.log("dentro de data 2",data2)

      //let varPrueba = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJucm9Eb2MiOiIzNDUxMjc0NCIsIm5vbWJyZUFwZWxsaWRvIjoiTUFJREFOQSwgTUlHVUVMIEFOR0VMIiwiaWRfc25pX2FwbGljYWNpb24iOiIyMTY5NDM1MjciLCJzbmlEb3Npc09yZGVuIjoiMCJ9.RBaB60DuI2-Byf3zU3ri2fFv0B5G2pGcjFOZ_TxiccE";
      var deccoded = jwt_decode(data2);

      
      const {nombreApellido,nroDoc} = deccoded

      //setText(nombreApellido)
      var pruebaCompleta = nombreApellido.concat(" DNI: ",nroDoc)
      setText(pruebaCompleta)
      console.log("Decodificado : ", nombreApellido,nroDoc);

    };
  
    // Check permissions and return the screens
    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text>Requesting for camera permission</Text>
        </View>)
    }
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={{ margin: 10 }}>No access to camera</Text>
          <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
        </View>)
    }
  
    // Return the View
    return (
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
 
        <Text style={styles.maintext}>{text}</Text>
          
      
        

  
        {scanned && <Button title={'Escanear Nuevamente?'} onPress={() => setScanned(false)} color='tomato' />}
      </View>
    );
  }
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    }
})

export default LectorQr;
