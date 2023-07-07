import React, { Component, useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

{/* Para obtener los datos de las dimensiones del dispositivo*/}
const screenHeight = Dimensions.get("screen").height



const homescreen = () => {


    const [addNew, setAddNew] = useState(false)
     const [task, setTask] = useState('')

    return (
        <SafeAreaView style= {{marginHorizontal: 20,}}>
            {/*el comp SafeAreaView es para que el contenido de la pantalla se acople correctamente al disp */}

            {/*Contenedor del input */}
            <View>
                <TextInput>
                    onChange= {setTask}
                    placeholder = "Agregar una tarea"
                    style= {styles.input}
                    value= {task}
                </TextInput>
                <View style= {{marginVertical: 10, flexDirection: 'row'}}>
                    <TouchableOpacity
                        style= {[styles.button, styles.acceptButton]}
                    >
                        <Text style= {styles.ButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style= {[styles.button, styles.cancelButton]}
                    >
                        <Text style= {styles.ButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/*Agregar tarea */}
            <View style = {styles.addButtonLocator}>
                <TouchableOpacity style ={styles.addButton}>
                    <Text style = {styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    acceptButton:{
        backgroundColor: 'green',
    },
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
        right: 10
    },

    addButtonText:{
        color: 'white',
        fontSize: 25,
    },

    button:{
        padding: 10,
        borderRadius: 10,
        alignSelf:'flex-start',
    },

    ButtonText:{
        fontSize: 15,
        color: 'white'
    },

    cancelButton: {
        backgroundColor: 'red',
        marginLeft: 5,
    },

    input:{
        backgroundColor: '#dedede',
        padding: 10,
        borderRadius: 10, 
    }
})

export default homescreen
