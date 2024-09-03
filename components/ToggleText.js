import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ToggleText() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Button title="Mostrar/Ocultar Texto" onPress={toggleVisibility} />
      {visible && <Text style={styles.text}>¡Hola soy eduardo y estoy probando mi app!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },
});

export default ToggleText;
