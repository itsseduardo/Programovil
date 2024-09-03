import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Greeting({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hola, {name}!</Text>
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

export default Greeting;
