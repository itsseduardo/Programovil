import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ImageList({ imageUrls }) {
  return (
    <View style={styles.container}>
      {imageUrls.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default ImageList;
