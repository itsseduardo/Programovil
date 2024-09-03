import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';  

function Game() {
  const [correctAnswer] = useState('Real Madrid');  

  return (
    <View style={styles.container}>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Game;
