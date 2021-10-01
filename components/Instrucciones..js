import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Instrucciones = () => {
    return (
        <View style={styles.container}>
            <Text>Instruccciones</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
})

export default Instrucciones;
