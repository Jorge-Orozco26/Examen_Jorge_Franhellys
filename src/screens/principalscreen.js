import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './HomeScreen';


const Principalscreen = ({ navigation }) => {
  const goToTaskScreen = () => {
    navigation.navigate('homescreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación de gestión de tareas domésticas</Text>
      <TouchableOpacity style={styles.button} onPress={goToTaskScreen}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2e9fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Principalscreen;