import React from 'react'
import {View, Text } from 'react-native'

const ListHeader = () => {

    return(
        <View style = {{marginBottom: 10}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold',}}>Actividades del día</Text>
        </View>
    )
}

export default ListHeader