import React, { Component, useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

{/* Para obtener los datos de las dimensiones del dispositivo*/}
const screenHeight = Dimensions.get("screen").height



const homescreen = () => {

     const [task, setTask] = useState('')

    return (
        <SafeAreaView>
            {/*el comp SafeAreaView es para que el contenido de la pantalla se acople correctamente al disp */}

            {/*Contenedor del input */}
            <View>
                <TextInput>
                    placeholder = "Agregar una tarea"
                    style= {styles.input}
                </TextInput>
            </View>


            {/*Agregar tarea */}
            <View style = {styles.addButtonLocator}>
                <TouchableOpacity style ={styles.addButton}>
                    <Text style = {styles.addButtonText}></Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    addButton:{
        alignItems: 'center',
        backgroundColor: 950,
        borderRadius: 35,
        justifyContent: 'center',
        height: 50,
        width: 60,
        position: 'absolute',
    },
    addButtonLocator:{
        position: 'absolute',
        top: screenHeight -120,
        right: 30
    },

    addButtonText:{
        color: white,
        fontSize: 25,
    },
})

export default homescreen
