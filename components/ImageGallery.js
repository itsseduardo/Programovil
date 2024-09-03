import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageList from './ImageList';  

function ImageGallery() {
  const [imageUrls] = useState([
    'https://media.admagazine.com/photos/638e25bb9a9048f82856c0c7/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg',
    'https://www.365scores.com/es/news/wp-content/uploads/2024/06/GettyImages-2155035833-780x470.jpg',
    'https://www.teleantioquia.co/wp-content/uploads/2024/07/10.-Seleccion-Colombia-vs.-Rumania-1.jpg',
    
  ]);

  return (
    <View style={styles.container}>
      <ImageList imageUrls={imageUrls} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default ImageGallery;
