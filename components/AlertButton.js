import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function AlertButton({ showAlert }) {
  return (
    <View style={styles.container}>
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default AlertButton;
