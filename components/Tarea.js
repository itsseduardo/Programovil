import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Tarea({ tarea }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tarea.title}</Text>
      <Text style={styles.status}>
        {tarea.completed ? 'Completada' : 'No completada'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 5,
    fontSize: 16,
    color: Tarea.completed ? 'green' : 'red',  // Cambia color según el estado
  },
});

export default Tarea;
