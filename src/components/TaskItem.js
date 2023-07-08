import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TaskItem = ({ onPress, task }) => {

    return(
        <View style = {styles.container}>
            <TouchableOpacity 
                style = {styles.button} 
                onPress={ onPress }
            />
            <Text style = {styles.text}>{ task }</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'white',
        height: 30,
        width:30,
        borderRadius: 15,
    },

    container:{
        backgroundColor: '#212121',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
       
    },

    text: {
        color: 'white',
        marginLeft: 10
    },
})

export default TaskItem
