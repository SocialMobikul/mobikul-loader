// my-package/index.js
import React from 'react';
import { View, Text } from 'react-native';
export { default as MobikulLoader } from './MobikulLoader';

const MyComponent = ({ title }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Text>{title}</Text>
  </View>
);

export default MyComponent;
