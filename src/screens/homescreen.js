/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListHeader from '../components/ListHeader';
import TaskItem from '../components/TaskItem';

/* Para obtener los datos de las dimensiones del dispositivo*/
const screenHeight = Dimensions.get('screen').height;

const Homescreen = () => {
  const [addNew, setAddNew] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['Primer tarea del dia']);

  const addTask = () => {
    {
      /*Agregar la tarea o task a este arreglo */
    }
    //se extraen los task actuales y creamos un array nuevo con las tareas y la nueva que agregaremos
    setTasks(currentTasks => [...currentTasks, task]);

    setTask('');
    setAddNew(false);
  };

  const deleteTask = index => {
    //creamos arreglo temporal
    //los tres puntos se utilizan para realizar una operación llamada propagación
    //Al utilizar los tres puntos antes de un array, se expande el contenido del array en el nuevo array.
    //sirve para saber en que posicion queremos eliminar
    //el 1 es para indicar que solo un elemento del Arreglo
    let temp = [...tasks];
    temp.splice(index, 1);
    setTask(temp);
  };

  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      {/*el comp SafeAreaView es para que el contenido de la pantalla se acople correctamente al disp */}

      {/*La variable de estado está en falso para que oculte los botones */}
      {/*Aquí estan los botones agregar y cancelar */}
      {addNew && (
        <View>
          <TextInput
            onChangeText={setTask}
            placeholder="Agregar una tarea"
            style={styles.input}
            value={task}
          />
          <View style={{marginVertical: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.button, styles.acceptButton]}
              onPress={addTask}>
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setAddNew(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View>
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <TaskItem task="" index={index} onPress={() => deleteTask(index)} />
          )}
          ListHeaderComponent={() => <ListHeader />}
          ItemSeparatorComponent={() => <View style={{marginVertical: 4}} />}
        />
      </View>

      {/*Agregar tarea */}
      <View style={styles.addButtonLocator}>
        <TouchableOpacity
          style={styles.addButton}
          //se declara una funcion anonima para envitar que suceda un ciclo infinito
          onPress={() => setAddNew(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: 'green',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 950,
    borderRadius: 35,
    justifyContent: 'center',
    height: 50,
    width: 60,
    position: 'absolute',
  },
  addButtonLocator: {
    position: 'absolute',
    top: screenHeight - 120,
    right: 10,
  },

  addButtonText: {
    color: 'white',
    fontSize: 25,
  },

  button: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  buttonText: {
    fontSize: 15,
    color: 'white',
  },

  cancelButton: {
    backgroundColor: 'red',
    marginLeft: 5,
  },

  input: {
    backgroundColor: '#dedede',
    padding: 10,
    borderRadius: 10,
  },
});

export default Homescreen;
