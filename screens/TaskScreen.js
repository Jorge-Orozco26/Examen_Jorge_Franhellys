/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../src/AuthContext';
import { TaskContext } from '../src/TaskContext';

function TaskScreen() {
  const [task, setTask] = useState('');
  const { username } = useContext(AuthContext);
  const { taskList, setTaskList } = useContext(TaskContext);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now().toString(), name: task, completed: false, completedBy: '' };
      setTaskList(prevTaskList => [...prevTaskList, newTask]);
      setTask('');
    }
  };

  const handleCompleteTask = id => {
    setTaskList(prevTaskList => {
      return prevTaskList.map(task => {
        if (task.id === id) {
          const completedBy = task.completed ? '' : username;
          return { ...task, completed: !task.completed, completedBy };
        }
        return task;
      });
    });
  };

  const renderItem = ({ item }) => {
    if (item.completed) {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ textDecorationLine: 'line-through', flex: 1 }}>{item.name}</Text>
          <Text style={{ marginLeft: 10 }}>{`${item.completedBy}`}</Text>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => handleCompleteTask(item.id)}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ textDecorationLine: 'none', flex: 1 }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  const completedTasks = taskList.filter(task => task.completed);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Tareas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1, marginRight: 10, padding: 5 }}
          placeholder="Nueva tarea"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button title="Agregar" onPress={handleAddTask} />
      </View>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Tareas completadas:</Text>
      <FlatList
        data={completedTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
}

export default TaskScreen;
