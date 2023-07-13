/* eslint-disable prettier/prettier */
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/AuthContext';
import { TaskProvider } from './src/TaskContext';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppNavigator />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
