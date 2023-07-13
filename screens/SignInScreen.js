/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../src/AuthContext';

const users = [
  { username: 'Padre', password: 'password1' },
  { username: 'Madre', password: 'password2' },
  { username: 'El Adoptado', password: 'password3' }
];

function SignInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername: setAuthUsername } = useContext(AuthContext);

  const handleSignIn = () => {
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      setAuthUsername(username);
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In Screen</Text>
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10 }}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

export default SignInScreen;
