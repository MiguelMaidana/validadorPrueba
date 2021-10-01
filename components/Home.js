import React from 'react';
import {View, StyleSheet, Button, TouchableOpacity,Text} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
        onPress={()=>navigation.navigate("LectorQr")}
      >
          <View style={styles.button}>
              <Text style={styles.buttontext}>Escanear Codigo</Text>

          </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Instruccciones")}
      >
          <View style={styles.button}>
              <Text style={styles.buttontext}>Instrucciones</Text>

          </View>
      </TouchableOpacity>
        </View>
      
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //alignItems:"center",
        justifyContent:"center"
    },
    button:{
        borderRadius:8,
        paddingVertical: 14,
        paddingHorizontal:10,
        backgroundColor:"#24BAEA",
        marginHorizontal:15,
        marginVertical:10

    },
    buttontext:{
        color:"white",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontSize:16,
        textAlign:"center"
    }
   
})

export default Home;
