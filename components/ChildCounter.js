import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ChildCounter({ counter, incrementCounter }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {counter}</Text>
      <Button title="Incrementar" onPress={incrementCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ChildCounter;
