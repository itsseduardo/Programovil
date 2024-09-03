import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';  
import ParentCounter from './components/ParentCounter';
import ImageGallery from './components/ImageGallery';
import Game from './components/Game';
import Tarea from './components/Tarea';


export default function App() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleRegister = (data) => {
    setUserData(data);
  };

  const handleToggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const showAlert = () => {
    Alert.alert("Alerta", "Esta es mi primera app, lol!");
  };

  const themeStyles = theme === 'dark' ? darkStyles : lightStyles;

  const exampleTarea = {
    title: 'Completar tarea de React Native',
    completed: false,
    };

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Greeting name="Jesus" />
      <UserDetails nombre="Jesus" edad={25} ocupacion="Software Engineer" />
      <ToggleText />
      <DynamicForm />
      <ClickCounter />
      
      
      <RegistrationForm onRegister={handleRegister} />
      <ThemeSwitcher onToggleTheme={handleToggleTheme} />
      <AlertButton showAlert={showAlert} /> 
      <ParentCounter /> 
      <ImageGallery />
      <Game />
      <Tarea tarea={exampleTarea} />
      
  
      {userData && (
        <View style={styles.userDataContainer}>
          <Text style={themeStyles.text}>Nombre: {userData.name}</Text>
          <Text style={themeStyles.text}>Correo Electrónico: {userData.email}</Text>
          <Text style={themeStyles.text}>Contraseña: {userData.password}</Text>
        </View>
      )}
      
      <Text style={themeStyles.text}>Tema actual: {theme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDataContainer: {
    marginTop: 20,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
  },
});
