import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const goToTaskScreen = () => {
    navigation.navigate('homescreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación para gestionar tareas domésticas</Text>
      <TouchableOpacity style={styles.button} onPress={goToTaskScreen}>
        <Text style={styles.buttonText}>Agregar Tareas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;