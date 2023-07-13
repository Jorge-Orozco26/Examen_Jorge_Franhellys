/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const handleGoToTasks = () => {
    navigation.navigate('Tasks');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Tasks" onPress={handleGoToTasks} />
    </View>
  );
}

export default HomeScreen;
