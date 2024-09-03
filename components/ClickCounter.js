import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Button title="Presionar" onPress={handlePress} />
      <Text style={styles.text}>Has presionado el botón {count} veces</Text>
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

export default ClickCounter;
