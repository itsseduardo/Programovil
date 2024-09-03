import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

function ThemeSwitcher({ onToggleTheme }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    onToggleTheme(newTheme);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isDarkTheme ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
        onPress={toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default ThemeSwitcher;
