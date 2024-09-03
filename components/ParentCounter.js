import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ChildCounter from './ChildCounter'; 

function ParentCounter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <ChildCounter counter={counter} incrementCounter={incrementCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ParentCounter;
