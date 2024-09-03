import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function DynamicForm() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {submittedText ? (
        <Text style={styles.submittedText}>Texto enviado: {submittedText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  submittedText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default DynamicForm;
