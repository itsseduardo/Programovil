import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function UserDetails ({ nombre, edad, ocupacion }) {
  return (
    <View style={styles.container}>
      <Text style={styles.userdetailsText}> {nombre}</Text>
      <Text style={styles.userdetailsText}> {edad}</Text>
      <Text style={styles.userdetailsText}> {ocupacion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 24,
    color: '#000',
  },
});

export default UserDetails;
