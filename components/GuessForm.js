import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function GuessForm({ correctAnswer }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    if (guess === correctAnswer) {
      setFeedback('¡Correcto!');
    } else {
      setFeedback('Incorrecto, intenta de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu adivinanza"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Enviar" onPress={handleGuess} />
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  feedback: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default GuessForm;
