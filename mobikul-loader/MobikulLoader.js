import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const MobikulLoader = ({ title, loading }) => (
  <View style={styles.container}>
    {loading ? (
      <>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.title}>{title}</Text>
      </>
    ) : (
      <Text style={styles.complete}>Completed</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the full height of the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: light background with some transparency
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  complete: {
    fontSize: 18,
    color: 'green',
  },
});

export default MobikulLoader;
